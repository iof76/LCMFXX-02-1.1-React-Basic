//import { ErrorMessage, Spinner } from "#common/components";
import { CharacterListComponent } from "./character-list.component";
import { useApiFilter } from "#core/api-filter";
import { useApiFetch } from "#core/api-fetch";
import { ButtonLoadMore } from "./components";
import { InputSearch } from "./components";

export const CharacterListContainer = () => {  
  const { membersFilters, search, setSearch } = useApiFilter();
  const { handleLoadMore, isEnd, disable } = useApiFetch();

  return <>
           <InputSearch search={search} setSearch={setSearch} />
           <CharacterListComponent characters={membersFilters} />
           <ButtonLoadMore disable={disable} handleLoadMore={handleLoadMore} isEnd={isEnd} />
         </>;
};
