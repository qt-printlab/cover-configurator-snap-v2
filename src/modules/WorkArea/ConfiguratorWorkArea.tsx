import FormAreaRight from "./FormArea/FormArea";
import VisualizationLeft from "./VisualizationArea/VisualizationArea";
import styles from "./styles.module.scss";

interface ConfiguratorWorkAreaProps {}

const ConfiguratorWorkArea = ({}: ConfiguratorWorkAreaProps) => {
  return (
    <div className={styles.wrapperWorkArea}>
      <VisualizationLeft />
      <FormAreaRight />
    </div>
  );
};

export default ConfiguratorWorkArea;
