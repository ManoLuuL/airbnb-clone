"use client";

import { CountrySelectProps, CountrySelectValue } from "./types";
import Select, { ThemeConfig } from "react-select";

import { useCountries } from "@/hooks";

export const CountrySelect = (props: CountrySelectProps) => {
  const { onChange, value } = props;

  const { getAll } = useCountries();

  const themes: ThemeConfig = (theme) => ({
    ...theme,
    borderRadius: 6,
    colors: {
      ...theme.colors,
      primary: "black",
      primary25: "#ffe4e6",
    },
  });

  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div>{option.flag}</div>
            <div>
              {option.label},
              <span className="text-neutral-500 ml-1">{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={themes}
      />
    </div>
  );
};
