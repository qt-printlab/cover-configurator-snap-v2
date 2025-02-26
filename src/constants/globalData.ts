import SpineEmbossing from "../modules/WorkArea/FormArea/SpineEmbossing/SpineEmbossing";
import { StandardEmbossing } from "../modules/WorkArea/FormArea/StandardEmbossing/StandardEmbossing";
import SpineEmbossingView from "../modules/WorkArea/VisualizationArea/SpineEmbossingView/SpineEmbossingView";
import StandardEmbossingView from "../modules/WorkArea/VisualizationArea/StandardEmbossingView/StandardEmbossingView";

export const CHECKBOX_VALUE_TO_RENDER: Record<any, string> = {
  spineEmbossing: "Spine Embossing",
  standardEmbossing: "Standard Embossing",
  isStudioLogo: "Studio Logo Stamp",
  isOverprint: "Premium Overprint",
  isCustomOverprint: "Custom Overprint",
  isPremiumMatrix: "Premium Embossing",
  isCustomMatrix: "Custom Embossing",
  isOurEmbossingMatrix: "QT Embossing Stamp",
  isCameo: "Cameo",
  isPhotoPanel: "Photo Panel",
  isLaserEngraving: "Laser engraving",
};

//translates
export const TABS_LABELS: Record<any, string> = {
  spineEmbossing: "tabs.spineEmbossing",
  standardEmbossing: "tabs.standardEmbossing",
  isStudioLogo: "tabs.studioLogo",
  isOverprint: "tabs.premiumOverprint",
  isCustomOverprint: "tabs.customOverprint",
  isPremiumMatrix: "tabs.premiumEmbossing",
  isCustomMatrix: "tabs.customEmbossing",
  isOurEmbossingMatrix: "tabs.qtEmbossingStamp",
  isCameo: "tabs.cameo",
  isPhotoPanel: "tabs.photoPanel",
  isLaserEngraving: "tabs.laserEngraving",
};

//данные ключи должны быть строго равны ключам объектов для записи альбома
export const COMPONENT_NAMES = [
  "spineEmbossing",
  "standardEmbossing",
  "isStudioLogo",
  "isOverprint",
  "isCustomOverprint",
  "isPremiumMatrix",
  "isCustomMatrix",
  "isOurEmbossingMatrix",
  "isCameo",
  "isLaserEngraving",
  "isPhotopanel",

  //combo
  "isCameoAndOverprint",
  "isCameoAndStandardEmbossing",
  "isCameoAndPremiumMatrix",
  "isCameoAndCustomMatrix",
  "isPhotopanelAndStandardEmbossing",
  "isPhotopanelAndPremiumMatrix",
  "isPhotopanelAndMatrycaGrafika",
];

export const comboComponentsMapping: Record<any, [string, string]> = {
  isCameoAndOverprint: ["isCameo", "isOverprint"],
  isCameoAndPremiumMatrix: ["isCameo", "isMatryca"],
  isCameoAndStandardEmbossing: ["isCameo", "isOkladka"],
  isCameoAndCustomMatrix: ["isCameo", "isGraficznaMatryca"],
  isPhotopanelAndStandardEmbossing: ["isPhotopanel", "isOkladka"],
  isPhotopanelAndPremiumMatrix: ["isPhotopanel", "isMatryca"],
  isPhotopanelAndMatrycaGrafika: ["isPhotopanel", "isGraficznaMatryca"],
};

export const stateNamesMapComponents: any = {
  standardEmbossing: {
    name: "Standard Embossing",
    component: StandardEmbossing,
  },
  spineEmbossing: {
    name: "Spine Embossing",
    component: SpineEmbossing,
  },
};

export const visualizerComponentsMap: Record<string, React.FC> = {
  standardEmbossing: StandardEmbossingView,
  spineEmbossing: SpineEmbossingView,
};
