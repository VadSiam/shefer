'use client'

import React, { createContext, useContext, ReactNode, useEffect } from 'react';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createClient } from '../supabase/client';
import { convertItems, displayError } from '../helpers';

interface ProductsState {
  products: any[]; // Replace 'any' with the actual type of your products
  isLoading: boolean;
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

  const [products, setProducts] = React.useState<any[]>([]);

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
  }, []);

  // Provide the products and loading state directly from the query object
  const value = {
    products,
    isLoading: productsQuery.isLoading
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
