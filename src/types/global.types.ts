import { CSSProperties } from "react";

export interface SvgIconProps {
  style?: CSSProperties;
  fill?: string;
  viewBox?: string;
  size?: string;
  width?: string;
  height?: string;
  className?: string;
  stroke?: string;
  onClick?: () => void;
  isRaundedBg?: boolean;
  tabIndex?: number;
}

export interface SelectOptionProps {
  readonly value: number | string | number[] | undefined | any;
  readonly label: string;
}

export interface ActiveTabProps {
  key: string;
  label: string;
  component: any;
}

export interface TabProps {
  activeTab: ActiveTabProps[];
  onTabClick: (tab: ActiveTabProps) => void;
}

export type EmbossingKeys = "isStandardEmbossing" | "isSpineEmbossing";

export type ComponentMappingProps<T extends string> = {
  [key in T]: {
    name: string;
    component: React.ComponentType<any>;
  };
};
