import useGetTranslations from "../../hooks/configuration/useGetTranslations";
import { LOCALE_TYPES } from "../../constants/enumsData";
import { appConfig } from "../../constants/config";

const Logo = () => {
  const { locale } = useGetTranslations();
  return (
    <img
      src={locale === LOCALE_TYPES.PL ? appConfig.pl.logo : appConfig.us.logo}
      alt=""
    />
  );
};

export default Logo;
