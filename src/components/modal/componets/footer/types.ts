import { ReactElement } from "react";

export type FooterProps = {
  disabled?: boolean;
  actionLabel: string;
  handleAction(): void;
  handleSecondaryAction?(): void;
  secondaryActionLabel?: string;
  footer?: ReactElement;
};
