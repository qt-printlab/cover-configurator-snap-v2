import pl from "../../translates/pl.json";
import en from "../../translates/en.json";
import { appConfig, LocaleType } from "../../constants/config";

const translations: Record<LocaleType, typeof en> = { en, pl };

const useGetTranslations = () => {
  const { locale } = appConfig;

  const t = (key: string) => {
    const keys = key.split(".");
    let result: any = translations[locale];

    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) return key;
    }

    return result || key;
  };

  return { locale, t };
};

export default useGetTranslations;
