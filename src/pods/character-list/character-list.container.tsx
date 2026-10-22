//import { ErrorMessage, Spinner } from "#common/components";
import { CharacterListComponent } from "./character-list.component";
import { useApiFetch } from "./contexts/api-fetch";
import { ButtonLoadMore } from "./components";
import { InputSearch } from "./components";

export const CharacterListContainer = () => {  
  const { handleLoadMore, members, isEnd, disable, search, setSearch } = useApiFetch();

  return <>
           <InputSearch search={search} setSearch={setSearch} />
           <CharacterListComponent characters={members} />
           <ButtonLoadMore disable={disable} handleLoadMore={handleLoadMore} isEnd={isEnd} />
         </>;
};
