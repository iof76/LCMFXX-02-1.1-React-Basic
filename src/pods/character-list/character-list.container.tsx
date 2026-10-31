import { ErrorMessage } from "#common/components";
import { CharacterListComponent } from "./character-list.component";
import { useApiFetch } from "./contexts/api-fetch";
import { ButtonLoadMore } from "./components";
import { InputSearch } from "./components";

export const CharacterListContainer = () => {  
  const { handleLoadMore, members, isEnd, disable, search, setSearch, error } = useApiFetch();

  return <>
           <InputSearch search={search} setSearch={setSearch} />
           <CharacterListComponent characters={members} />
           <ErrorMessage message={error || (members.length === 0 ? "No se han encontrado personajes" : "")} />
           <ButtonLoadMore disable={disable} handleLoadMore={handleLoadMore} isEnd={isEnd} />
         </>;
};
