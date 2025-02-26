import clsx from "clsx";
import { Button } from "../../../../components/Button/Button";
import { TabProps } from "../../../../types/global.types";
import style from "./styles.module.scss";

const Tabs = ({ activeTab, onTabClick }: TabProps) => {
  // tab sorting
  const sortedTabs = [...activeTab].sort((a, b) => {
    if (a.key === "standardEmbossing") return -1;
    if (b.key === "standardEmbossing") return 1;

    if (a.key === "spineEmbossing") return 1;
    if (b.key === "spineEmbossing") return -1;

    return 0;
  });

  return (
    <div className={style.containerTabs}>
      {sortedTabs.map((tab: any) => {
        return (
          <Button
            key={tab.key}
            onClick={() => onTabClick(tab)}
            className={clsx(style.tabStyle)}
          >
            {tab.label}
          </Button>
        );
      })}
    </div>
  );
};

export default Tabs;
