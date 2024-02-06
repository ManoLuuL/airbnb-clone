import { Range, RangeKeyDict } from "react-date-range";

export type DataPickerProps = {
  value: Range;
  onChange(value: RangeKeyDict): void;
  disabledDates?: Date[];
};
