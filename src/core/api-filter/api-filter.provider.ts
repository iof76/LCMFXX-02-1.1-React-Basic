import React from "react";
import type { Character } from "#common/models";
import { useApiFetch } from "#core/api-fetch";
import { ApiFilterContext } from "./api-filter.context";

interface Props {
  children: React.ReactNode;
}

export const ApiFilterProvider = (props: Props) => {
  const { children } = props;
  const { members } = useApiFetch();
  const [ search, setSearch ] = React.useState<string>("");

  const membersFilters = React.useMemo(() => {
    if (!search) {
      return [...members];
    }

    return members.filter((member: Character) => {
      return member.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, members]);

  return React.createElement(
    ApiFilterContext.Provider,
    { value: { membersFilters, search, setSearch } },
    children
  );
}