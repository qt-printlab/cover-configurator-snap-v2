import React from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { visualizerComponentsMap } from "../../../constants/globalData";

const VisualizationArea = () => {
  const activeComponentKey = useSelector(
    (state: any) => state.albumConfiguration.activeTabKey
  );

  const ActiveComponent = activeComponentKey
    ? visualizerComponentsMap[
        Object.keys(visualizerComponentsMap).find((key) =>
          activeComponentKey.startsWith(key)
        ) || ""
      ]
    : null;

  return (
    <div className={styles.wrapperVisualLeft}>
      {ActiveComponent && <ActiveComponent />}
    </div>
  );
};

export default VisualizationArea;
