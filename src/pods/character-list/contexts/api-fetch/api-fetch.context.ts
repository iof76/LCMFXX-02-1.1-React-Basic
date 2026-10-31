import React from "react";
import type { Character } from "#common/models";

export interface CharacterContext {
  members: Character[];
  endPages: number;
  isEnd: boolean;
  disable: boolean;
  search: string;
  handleLoadMore: () => void;
  setSearch: (value: string) => void;
  error?: string | null;
}

export const ApiFetchContext = React.createContext<CharacterContext>({
  members: [],
  //setMembers: (value) => {},
  endPages: 1000000,
  isEnd: false,
  disable: false,
  search: "",
  handleLoadMore: () => {},
  setSearch: () => {},
  error: '',
});