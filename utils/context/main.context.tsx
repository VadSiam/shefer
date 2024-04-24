'use client'

import React, { createContext, useContext, ReactNode, useEffect, useState, useCallback } from 'react';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createClient } from '../supabase/client';
import { convertItems, displayError } from '../helpers';
import { useRouter } from 'next/navigation';
import { Session, User } from '@supabase/supabase-js';
import dynamic from 'next/dynamic'
import { ProductCardProps } from '@/[lng]/components/Carousel/types';

interface ProductsState {
  products: ProductCardProps[];
  isLoading: boolean;
  sessionData: Session | null;
  userData: User | null;
  resetUserData: () => void;
  afterLogin: () => void;
  getProductById: (_id: string) => ProductCardProps | undefined;
}

// Create the context with a default value
const ProductsContext = createContext<ProductsState | undefined>(undefined);

// Hook to use the context
export const useMainContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useMainContext must be used within a ProductsProvider');
  }
  return context;
};

// Define the provider component
export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const supabase = createClient();

  const router = useRouter();

  const [products, setProducts] = React.useState<ProductCardProps[]>([]);
  const [sessionData, setSessionData] = useState<any>(null);
  const [userData, setUserData] = useState<User | null>(null);

  const getProductById = useCallback((_id: string) => {
    return products.find(product => `${product.id}` === _id);
  }, [products]);

  const resetUserData = useCallback(async () => {
    await supabase.auth.signOut()
    setUserData(null)
    router.push('/login')
  }, [router, supabase.auth]);

  const userQuery = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();

        if (!user) {
          setUserData(null);
          return null;
        }

        setUserData(user);
        return user;
      } catch (error: any) {
        displayError({ message: 'An unexpected error occurred while fetching the user data.' });
        throw error;
      }
    },
    // By setting `enabled` to false, the query will not automatically run.
    enabled: false,
  });

  const sessionQuery = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      try {
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          displayError(error);
          throw new Error(error.message);
        }

        setSessionData(data);
        return data;
      } catch (error: any) {
        displayError({ message: 'An unexpected error occurred while fetching the session.' });
        throw error;
      }
    },
    // By setting `enabled` to false, the query will not automatically run.
    enabled: false,
  });

  // Use React Query's useQuery hook to fetch products
  const productsQuery = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      try {
        const { data, error } = await supabase.from('products').select('*');
        if (error) {
          displayError(error);
          throw new Error(error.message); // re-throw the error to catch it in the onError hook
        }
        const convertedData = convertItems(data);
        setProducts(convertedData)
        return convertedData;
      } catch (error: any) {
        // Handle any unexpected errors
        displayError({ message: 'An unexpected error occurred.' });
        console.error('An unexpected error occurred.', error);
      }
    },
    enabled: false,
  });

  const afterLogin = useCallback(() => {
    sessionQuery.refetch();
    userQuery.refetch();
    router.push('/');
  }, [sessionQuery, userQuery, router]);


  useEffect(() => {
    productsQuery.refetch();
    userQuery.refetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Provide the products and loading state directly from the query object
  const value = {
    products,
    isLoading: productsQuery.isLoading || sessionQuery.isLoading || userQuery.isLoading,
    sessionData,
    userData,
    resetUserData,
    afterLogin,
    getProductById,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

const ThemeProvider = dynamic(() => import('./ThemeProvider'), { ssr: false })

// Set up the QueryClientProvider in a separate component
export const QueryClientProviderWrapper = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider forcedTheme={undefined} attribute="class">
        <ProductsProvider>
          {children}
        </ProductsProvider>
      </ThemeProvider >
    </QueryClientProvider >
  );
};
