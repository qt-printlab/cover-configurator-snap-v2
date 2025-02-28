import { useCallback, useEffect } from "react";
import styles from "./styles.module.scss";
import useWhichComponentRender from "../../../hooks/useWhichComponentRender";
import Tabs from "./Tabs/Tabs";
import { ActiveTabProps } from "../../../types/global.types";
import { FormProvider, useForm } from "react-hook-form";
import useGetTranslations from "../../../hooks/configuration/useGetTranslations";
import { TABS_LABELS } from "../../../constants/globalData";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setActiveTabKey,
  setIsModalOpen,
} from "../../../redux/slices/configuratorSlice";
import useSaveConfiguratorData from "../../../hooks/useSaveConfiguratorData";
import { ConfigurationState } from "../../../redux/slices/formSlice";

const FormArea = () => {
  const defaultValues = useSelector((state: any) => state.formState);
  const coverData = useSelector(
    (state: any) => state.albumConfiguration.coverData
  );

  const methods = useForm({ defaultValues, mode: "onChange" });
  const dispatch = useDispatch();

  const { t } = useGetTranslations();

  const { activeTab, ActiveComponent } = useWhichComponentRender();
  const { savedData } = useSaveConfiguratorData();

  const localizedTabs = activeTab.map((tab) => ({
    ...tab,
    label: t(TABS_LABELS[tab.key] || tab.label),
  }));

  const handleTabSelect = useCallback((tab: ActiveTabProps) => {
    dispatch(setActiveTabKey(tab.key));
  }, []);

  const onSubmit = async (data: ConfigurationState) => {
    try {
      const savedFormData = savedData(data);
      console.log("savedFormData", savedFormData);

      dispatch(setIsModalOpen(false));
    } catch (error) {
      console.error("ERROR", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className={styles.wrapperFormArea}>
        <div className={styles.contentFormArea}>
          <Tabs onTabClick={handleTabSelect} activeTab={localizedTabs} />
          <div className={styles.containerFormComponents}>
            <form
              id="configuratorForm"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              {ActiveComponent && <ActiveComponent />}
            </form>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default FormArea;
