import { IconType } from "react-icons";
import { MouseEvent } from "react";

export type ButtonProps = {
  label: string;
  onClick(e: MouseEvent<HTMLButtonElement>): void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
};
