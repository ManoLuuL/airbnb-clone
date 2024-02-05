import { Button } from "@/components";
import { FooterProps } from "./types";

export const Footer = (props: FooterProps) => {
  const {
    actionLabel,
    disabled,
    handleAction,
    handleSecondaryAction,
    secondaryActionLabel,
    footer,
  } = props;

  return (
    <div className="flex flex-col gap-2 p-6">
      <div className="flex flex-row items-center gap-4 w-full">
        {secondaryActionLabel && handleSecondaryAction && (
          <Button
            outline
            disabled={disabled}
            label={secondaryActionLabel}
            onClick={handleSecondaryAction}
          />
        )}

        <Button
          disabled={disabled}
          label={actionLabel}
          onClick={handleAction}
        />
      </div>
      {footer}
    </div>
  );
};
