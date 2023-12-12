'use client'

import { useMainContext } from "@/utils/context/main.context";
import { IPageProps } from "../page";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AccountPage = ({ params: { lng } }: IPageProps) => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { userData, isLoading } = useMainContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || isLoading) {
    return null;
  }

  if(!userData) {
    router.push(`/${lng}/login`)
    return null;
  }

  return (
    <div>
      <h1>Account</h1>
      <p>
        userData.email: {userData.email}
      </p>
    </div>
  );
}

export default AccountPage;