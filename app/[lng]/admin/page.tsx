'use client'

import { useMainContext } from "@/utils/context/main.context";
import { IPageProps } from "../page";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Admin, AppBar, Layout, Resource, TitlePortal } from 'react-admin';
import { SetPasswordPage, ForgotPasswordPage } from 'ra-supabase';
import { BrowserRouter, Route } from 'react-router-dom';
import { dataProvider } from "@/utils/context/dataProvider";
import { authProvider } from "@/utils/context/authProvider";
import ProductsList from "./products/List";
import LoginPage from "../login/page";
import { ProductCreate } from "./products/Create";
import ProductEdit from "./products/Edit";
import ProductShow from "./products/Show";

const MainPageButton = () => (
  <a 
  className="flex items-center"
  href="/">
    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
      SHOP
    </button>
  </a>
);

export const MyAppBar = () => (
  <AppBar>
    <TitlePortal />
    <MainPageButton />
  </AppBar>
);


const MyLayout = (props: any) => <Layout {...props} appBar={MyAppBar} />;

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
          layout={MyLayout}
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
          <Resource
            name="products"
            list={ProductsList}
            show={ProductShow}
            create={ProductCreate}
            edit={ProductEdit}
          />
        </Admin>
      </BrowserRouter>
    </div>
  );
}

export default AdminPage;
