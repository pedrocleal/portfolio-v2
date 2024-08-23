"use client";

import { createContext, useContext } from "react";
import { Locale } from "../../../i18n-config";

const LanguageContext = createContext({
  lang: "en" as Locale,
  dictionary: {},
});

export default function LanguageProvider({
  children,
  params: { lang },
  dictionary,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
  dictionary: any;
}) {
  return (
    <LanguageContext.Provider
      value={{
        lang,
        dictionary
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
