import { LOCALE_TYPES } from "./enumsData";

export type LocaleType = "pl" | "en";

export const appConfig = {
  locale: (LOCALE_TYPES.EN as LocaleType) || "pl",
  apiPaths: {
    snap: "https://shop.qtalbums.com/apps/shpfqt/",
    qt_eu: "https://shop.qtalbums.eu/apps/shpfqteu",
    qt_us: "https://snapalbums.pl/apps/shpfsnapalbums",
  },
  us: {
    logo: "https://cdn.shopify.com/s/files/1/0061/8967/8695/t/10/assets/logo_snapalbums.png",
  },
  pl: {
    logo: "https://cdn.shopify.com/s/files/1/0061/8967/8695/t/10/assets/logo_snapalbums.png",
  },
};
