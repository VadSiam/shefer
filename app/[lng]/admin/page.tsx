'use client'

import { useMainContext } from "@/utils/context/main.context";
import { IPageProps } from "../page";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Admin, CustomRoutes, Resource, ListGuesser } from 'react-admin';
import { LoginPage, SetPasswordPage, ForgotPasswordPage } from 'ra-supabase';
import { BrowserRouter, Route } from 'react-router-dom';
import { dataProvider } from "@/utils/context/dataProvider";
import { authProvider } from "@/utils/context/authProvider";

const AdminPage = ({ params: { lng } }: IPageProps) => {
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
    <BrowserRouter>
      <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        loginPage={LoginPage}
      >
        <CustomRoutes noLayout>
          <Route
            path={SetPasswordPage.path}
            element={<SetPasswordPage />}
          />
          <Route
            path={ForgotPasswordPage.path}
            element={<ForgotPasswordPage />}
          />
        </CustomRoutes>
        <Resource name="posts" list={ListGuesser} />
        <Resource name="authors" list={ListGuesser} />
      </Admin>
    </BrowserRouter>
  );
}

export default AdminPage;