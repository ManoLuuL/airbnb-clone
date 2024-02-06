"use client";

import { DataPickerProps } from "./types";
import { DateRange } from "react-date-range";

export const DatePicker = (props: DataPickerProps) => {
  const { onChange, value, disabledDates } = props;

  return (
    <DateRange
      rangeColors={["#262626"]}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
    />
  );
};
