import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import {
  CHECKBOX_VALUE_TO_RENDER,
  comboComponentsMapping,
  COMPONENT_NAMES,
  stateNamesMapComponents,
} from "../constants/globalData";
import { useDispatch } from "react-redux";
import { setActiveTabKey } from "../redux/slices/configuratorSlice";

const useWhichComponentRender = () => {
  const personalization = useSelector(
    (state: RootState) => state.albumConfiguration.personalizationComponents
  );
  const activeTabKey = useSelector(
    (state: RootState) => state.albumConfiguration.activeTabKey
  );
  const dispatch = useDispatch();

  const stateOfComponents = useMemo(() => {
    let components: Record<string, boolean> = {};

    COMPONENT_NAMES.forEach((name) => {
      components[name] = personalization.includes(
        CHECKBOX_VALUE_TO_RENDER[name]
      );
    });

    Object.keys(comboComponentsMapping).forEach((comboKey) => {
      const combo = comboComponentsMapping[comboKey];
      if (combo.every((item) => components[item])) {
        components[comboKey] = true;
        combo.forEach((item) => (components[item] = false));
      }
    });

    return components;
  }, [personalization]);

  const activeTab = useMemo(() => {
    const activeKeys = Object.keys(stateOfComponents).filter(
      (key) => stateOfComponents[key]
    );
    const tabs = activeKeys.map((key) => ({
      key,
      label: CHECKBOX_VALUE_TO_RENDER[key],
      component: stateNamesMapComponents[key]?.component,
    }));

    if (!activeTabKey && tabs.length > 0) {
      dispatch(setActiveTabKey(tabs[0].key));
    }

    return tabs;
  }, [stateOfComponents, activeTabKey]);

  const ActiveComponent = useMemo(() => {
    const active = activeTab.find((tab) => tab.key === activeTabKey);

    return active ? active.component : null;
  }, [activeTab, activeTabKey]);

  return {
    stateOfComponents,
    activeTab,
    ActiveComponent,
    activeTabKey,
  };
};

export default useWhichComponentRender;
