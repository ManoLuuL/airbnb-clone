import { IconType } from "react-icons";

export type CategoryInputProps = {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick(value: string): void;
};
