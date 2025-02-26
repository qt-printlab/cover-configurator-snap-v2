export const standardEmbossingCheck = (
  configuratorData: any,
  finalSaveconfiguratorData: any
) => {
  finalSaveconfiguratorData.cover_front_standard_embossing_line1 =
    configuratorData.cover_front_standard_embossing_line1;

  finalSaveconfiguratorData.font_cover_front_standard_embossing_line1 =
    configuratorData.font_cover_front_standard_embossing_line1;

  finalSaveconfiguratorData.cover_front_standard_embossing_placement =
    configuratorData.cover_front_standard_embossing_placement;
  finalSaveconfiguratorData.cover_front_embossing_color =
    configuratorData.cover_front_embossing_color;

  if (configuratorData.cover_front_standard_embossing_line2.length) {
    finalSaveconfiguratorData.cover_front_standard_embossing_line2 =
      configuratorData.cover_front_standard_embossing_line2;
    finalSaveconfiguratorData.font_cover_front_standard_embossing_line2 =
      configuratorData.font_cover_front_standard_embossing_line2;
  }

  if (configuratorData.cover_front_standard_embossing_line3.length) {
    finalSaveconfiguratorData.cover_front_standard_embossing_line3 =
      configuratorData.cover_front_standard_embossing_line3;
    finalSaveconfiguratorData.font_cover_front_standard_embossing_line3 =
      configuratorData.font_cover_front_standard_embossing_line3;
  }

  return finalSaveconfiguratorData;
};

export const spineEmbossingCheck = (
  configuratorData: any,
  finalSaveconfiguratorData: any
) => {
  // if (configuratorData?.isHeartCheckboxChose;) {
  //   finalSaveconfiguratorData.isCheckboxSerduszkoGrzbietChecked =
  //     configuratorData.isHeartCheckboxChose;
  //   finalSaveconfiguratorData.selectedColorGrzbiet = selectedColorGrzbiet;
  // }\
  //  if() {
  //   finalSaveconfiguratorData.
  // }

  return finalSaveconfiguratorData;
};
