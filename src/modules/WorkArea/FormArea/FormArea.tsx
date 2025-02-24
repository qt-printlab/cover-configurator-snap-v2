import { useCallback } from "react";
import styles from "./styles.module.scss";
import useWhichComponentRender from "../../../hooks/useWhichComponentRender";
import Tabs from "./Tabs/Tabs";
import { ActiveTabProps } from "../../../types/global.types";
import { FormProvider, useForm } from "react-hook-form";
import useGetTranslations from "../../../hooks/configuration/useGetTranslations";
import { TABS_LABELS } from "../../../constants/globalData";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setActiveTabKey } from "../../../redux/slices/configuratorSlice";

const FormArea = () => {
  const defaultValues = useSelector((state: any) => state.formState);
  const methods = useForm({ defaultValues });
  const dispatch = useDispatch();

  const { t } = useGetTranslations();

  const { activeTab, ActiveComponent } = useWhichComponentRender();

  const localizedTabs = activeTab.map((tab) => ({
    ...tab,
    label: t(TABS_LABELS[tab.key] || tab.label),
  }));

  const handleTabSelect = useCallback((tab: ActiveTabProps) => {
    dispatch(setActiveTabKey(tab.key));
  }, []);

  return (
    <FormProvider {...methods}>
      <div className={styles.wrapperFormArea}>
        <div className={styles.contentFormArea}>
          <Tabs onTabClick={handleTabSelect} activeTab={localizedTabs} />
          <div className={styles.containerFormComponents}>
            <form>{ActiveComponent && <ActiveComponent />}</form>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default FormArea;
