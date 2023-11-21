'use client'

import { useMainContext } from "@/utils/context/main.context";
import { IPageProps } from "../page";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Admin, Resource } from 'react-admin';
import { SetPasswordPage, ForgotPasswordPage } from 'ra-supabase';
import { BrowserRouter, Route } from 'react-router-dom';
import { dataProvider } from "@/utils/context/dataProvider";
import { authProvider } from "@/utils/context/authProvider";
import ProductsList from "./products/List";
import LoginPage from "../login/page";
import { ProductCreate } from "./products/Create";
import ProductEdit from "./products/Edit";

const AdminPage = ({ params: { lng } }: IPageProps) => {
  console.log('🚀 ~ file: page.tsx:14 ~ lng:', lng)
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { userData, isLoading } = useMainContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || isLoading) {
    return null;
  }

  if (!userData) {
    router.push(`/${lng}/login`)
    return null;
  }

  return (
    <div className="block w-full">
      <BrowserRouter>
        <Admin
          dataProvider={dataProvider}
          authProvider={authProvider}
          loginPage={LoginPage}
          title="Admin side"
        >
          {/* <CustomRoutes>
            <Route
              path={SetPasswordPage.path}
              element={<SetPasswordPage />}
            />
            <Route
              path={ForgotPasswordPage.path}
              element={<ForgotPasswordPage />}
            />
            <Route path={`/${lng}/products`} element={<AdminProductsList />} />
          </CustomRoutes> */}
          <Resource name="products" list={ProductsList} />
          <Resource name="products/create" list={ProductCreate} />
          <Resource name="products/:id" list={ProductEdit} />

          {/* <Resource name="authors" list={ListGuesser} /> */}
        </Admin>
      </BrowserRouter>
    </div>
  );
}

export default AdminPage;
