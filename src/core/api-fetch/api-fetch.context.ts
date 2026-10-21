import React from "react";
import type { Character } from "#common/models";

export interface CharacterContext {
  members: Character[];
  endPages: number;
  isEnd: boolean;
  disable: boolean;
  handleLoadMore: () => void;
}

export const ApiFetchContext = React.createContext<CharacterContext>({
  members: [],
  //setMembers: (value) => {},
  endPages: 1000000,
  isEnd: false,
  disable: false,
  handleLoadMore: () => {},
});