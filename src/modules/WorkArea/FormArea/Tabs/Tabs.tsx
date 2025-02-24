import { Button } from "../../../../components/Button/Button";
import { TabProps } from "../../../../types/global.types";
import style from "./styles.module.scss";

const Tabs = ({ activeTab, onTabClick }: TabProps) => {
  return (
    <div className={style.containerTabs}>
      {activeTab.map((tab) => (
        <Button
          key={tab.key}
          onClick={() => onTabClick(tab)}
          className={style.tabStyle}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;
