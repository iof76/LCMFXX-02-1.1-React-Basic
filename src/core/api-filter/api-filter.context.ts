import React from "react";
import type { Character } from "#common/models";

export interface SearchEntityContext {
  membersFilters: Character[];
  search: string;
  setSearch: (value: string) => void;
}

export const ApiFilterContext = React.createContext<SearchEntityContext>({
  membersFilters: [],
  search: '',
  setSearch: () => {},
});