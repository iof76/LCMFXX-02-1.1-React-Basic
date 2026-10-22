import React from "react";
import type { Character } from "#common/models";
import { useApiFetch } from "#core/api-fetch";
import { ApiFilterContext } from "./api-filter.context";
import { useDebounce } from "#common/hooks/use-debounce.ts";

interface Props {
  children: React.ReactNode;
}

export const ApiFilterProvider = (props: Props) => {
  const { children } = props;
  const { members } = useApiFetch();
  const [ search, setSearch ] = React.useState<string>("");
  const debouncedValue = useDebounce(search, 500);
  
  
  
  
  const membersFilters = React.useMemo(() => {
    if (!debouncedValue || debouncedValue.trim() === "") {
      return [...members];
    }

    return members.filter((member: Character) => {
      return member.name.toLowerCase().includes(debouncedValue.toLowerCase());
    });
  }, [debouncedValue, members]);

  return React.createElement(
    ApiFilterContext.Provider,
    { value: { membersFilters, search, setSearch } },
    children
  );
}