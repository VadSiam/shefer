"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Context, createContext, useContext, useEffect, useMemo, useState } from "react";
import { useCookies } from "react-cookie";

// import { cookieName, cookieNameSecond } from "@/app/i18n/settings";
// import { ExchangeRatesDatum } from "@/gql/generated/graphql";
// import { ECurrency, ELang } from "@/utils/enums";

// import { useGetExchangeRate, useSetLocaleOnBE } from "./useHooks";
// import { AuthContext } from "../AuthProvider";

export enum ELang {
  EN = "en",
  RU = "ru",
}

type TSettingsContextProps = {
  lang: ELang;
  onSetLang: (_data: ELang) => void;
  // currency: ECurrency;
  // onSetCurrency: (_data: ECurrency) => void;
  // exchangeRateData: ExchangeRatesDatum | null;
  // getExchangeRate: () => void;
  // rubMode: boolean;
};

export const SettingsContext = createContext<TSettingsContextProps | null>(
  null
) as Context<TSettingsContextProps>;

export default function SettingsProvider({
  children,
  lng,
}: {
  children?: React.ReactNode;
  lng: ELang;
}) {
  // const { getExchangeRate, data: exchangeRateData, error } = useGetExchangeRate();
  // const { auth } = useContext(AuthContext);
  // const [cookies, setCookies] = useCookies(["currency", cookieName, cookieNameSecond]);
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();
  // const { setLocaleOnBE, error: setLocaleError } = useSetLocaleOnBE()

  const [lang, setLang] = useState((lng as ELang) || ELang.RU);

  // const [currency, setCurrency] = useState(
  //   cookies.currency
  //     ? (decodeURI(cookies.currency) as ECurrency)
  //     : (lang === ELang.RU)
  //       ? ECurrency.RUB
  //       : ECurrency.USD
  // );

  // useEffect(() => {
  //   if (error || setLocaleError) {
  //     console.error("Error happens at useGetExchangeRate/useSetLocaleOnBE at SettingsProvider", error || setLocaleError);
  //   }
  // }, [error, setLocaleError]);

  // const onSetLocaleOnBE = (locale?: string) => {
  //   if (auth) {
  //     if (locale) {
  //       setLocaleOnBE({ variables: { locale: locale.toUpperCase() } });
  //     } else {
  //       setLocaleOnBE({ variables: { locale: lng.toUpperCase() } });
  //     }
  //   }
  // }

  // useEffect(() => {
  //   onSetLocaleOnBE()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const onSetLang = (langData: ELang) => {
    setLang(langData);
    // onSetLocaleOnBE(langData);

    const pathParts = pathname?.split('/') || [];
    if (pathParts.length > 1 && Object.values(ELang).includes(pathParts[1] as ELang)) {
      pathParts[1] = langData;
      // setCookies(cookieName, langData);
      // setCookies(cookieNameSecond, langData);
    } else {
      pathParts.splice(1, 0, langData);
      // setCookies(cookieName, langData);
      // setCookies(cookieNameSecond, langData);
    }

    const searchOrderString = search?.get('order');
    const searchString = searchOrderString ? `?order=${search?.get('order')}` : '';
    const newPath = pathParts.join('/');
    router.push(`${newPath}${searchString}`);
  };

  // const onSetCurrency = (data: ECurrency) => {
  //   // setCurrency(data);
  //   setCookies("currency", encodeURI(data));
  // };

  // const rubMode = useMemo(() => {
  //   return currency === ECurrency.RUB;
  // }, [currency]);

  return (
    <SettingsContext.Provider
      value={{
        lang,
        onSetLang,
        // currency,
        // onSetCurrency,
        // exchangeRateData,
        // getExchangeRate,
        // rubMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
