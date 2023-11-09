'use client'

import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createClient } from '../supabase/client';
import { convertItems, displayError } from '../helpers';
import { useRouter } from 'next/navigation';

interface ProductsState {
  products: any[]; // Replace 'any' with the actual type of your products
  isLoading: boolean;
  sessionData: any;
  userData: any;
}

// Create the context with a default value
const ProductsContext = createContext<ProductsState | undefined>(undefined);

// Hook to use the context
export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProductsContext must be used within a ProductsProvider');
  }
  return context;
};

// Define the provider component
export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const supabase = createClient();
  const router = useRouter();

  const [products, setProducts] = React.useState<any[]>([]);
  const [sessionData, setSessionData] = useState<any>(null);
  const [userData, setUserData] = useState<any>(null);

  const userQuery = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();

        if (!user) {
          router.push('/login')
        }

        setUserData(user);
        return user;
      } catch (error: any) {
        displayError({ message: 'An unexpected error occurred while fetching the session.' });
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
        console.log('🚀 ~ file: main.context.tsx:37 ~ data:', data)

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
        throw error; // re-throw the error
      }
    },
    enabled: false,
  });

  useEffect(() => {
    productsQuery.refetch();
    // sessionQuery.refetch();
    userQuery.refetch();
  }, []);

  // Provide the products and loading state directly from the query object
  const value = {
    products,
    isLoading: productsQuery.isLoading || sessionQuery.isLoading || userQuery.isLoading,
    sessionData,
    userData,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

// Set up the QueryClientProvider in a separate component
export const QueryClientProviderWrapper = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ProductsProvider>
        {children}
      </ProductsProvider>
    </QueryClientProvider>
  );
};
