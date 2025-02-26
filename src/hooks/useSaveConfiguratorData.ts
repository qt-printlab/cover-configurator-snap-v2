import { useCallback } from "react";
import useWhichComponentRender from "./useWhichComponentRender";
import { COMPONENTS_NAMES } from "../types/enums";
import { standardEmbossingCheck } from "../utils/saveDataCheckFunctions";

const useSaveConfiguratorData = () => {
  const { activeTab } = useWhichComponentRender();

  const savedData = useCallback(
    (data: any) => {
      if (!data) {
        console.warn("useSaveConfiguratorData: data is empty");
        return {};
      }

      let finalData = {};

      activeTab.forEach((tabItem) => {
        const tabKey = tabItem.key;

        switch (tabKey) {
          case COMPONENTS_NAMES.STANDARD_EMBOSSING:
            finalData = standardEmbossingCheck(
              data.standardEmbossing,
              finalData
            );
          // case COMPONENTS_NAMES.SPINE_EMBOSSING:
          //   finalData = standardEmbossingCheck(data, finalData);
        }
      });

      return finalData;
    },
    [activeTab]
  );

  return { savedData };
};

export default useSaveConfiguratorData;

// if (sectionValue) {
//   const filteredSection = Object.fromEntries(
//     Object.entries(sectionValue).filter(
//       ([_, value]) =>
//         value !== "" && value !== null && value !== undefined
//     )
//   );
//   console.log("filteredSection", filteredSection);
//   mergedData = { ...mergedData, ...filteredSection };
// }
