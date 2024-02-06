import { CategoriesParams } from "../types";

type CategoriesOmited = Omit<CategoriesParams, "description">;

export type CategoryBoxProps = CategoriesOmited & {
  selected?: boolean;
};
