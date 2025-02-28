import FormContext from "../../context/FormContext";
import FormAreaRight from "./FormArea/FormArea";
import VisualizationLeft from "./VisualizationArea/VisualizationArea";
import styles from "./styles.module.scss";

const ConfiguratorWorkArea = () => {
  return (
    <FormContext>
      <div className={styles.wrapperWorkArea}>
        <VisualizationLeft />
        <FormAreaRight />
      </div>
    </FormContext>
  );
};

export default ConfiguratorWorkArea;
