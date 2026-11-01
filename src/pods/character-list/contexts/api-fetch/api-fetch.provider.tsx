import React from "react";
import { ApiFetchContext } from "./api-fetch.context";
import type { Character } from '#common/models';
import { useDebounce } from "#common/hooks";
import { fetchMembers } from './api-fetch.api'
import { mapCharacterListFromApiToVm } from "./api-fetch.mapper";

interface Props {
  children: React.ReactNode;
}

export const ApiFetchProvider = (props: Props) => {
  const { children } = props;
  const [ members, setMembers ] = React.useState<Character[]>([]);
  const [ page, setPage ] = React.useState<number>(1);
  const [ endPages, setEndPages ] = React.useState<number>(100000);
  const [ error, setError ] = React.useState<string | null>(null);
  const [ disable, setDisable ] = React.useState<boolean>(false);
  const [ search, setSearch ] = React.useState<string>("");
  const debouncedValue = useDebounce(search, 500);

  const handleInitialLoad = React.useCallback(() => {
    const loadData = async() => {
      setDisable(true);
      const {totalPages, resMembers} = await fetchMembers(1, search);
      setMembers([...mapCharacterListFromApiToVm(resMembers)]);
      setEndPages(totalPages);
      setPage(2);
      setDisable(false);
    };
    loadData();
  }, [debouncedValue]  );

  React.useEffect(() => {
      const loadData = async() => {
          await handleInitialLoad();
      }

      loadData();
  }, []);

  React.useEffect(() => {
      const callNew = async () => {
          await handleInitialLoad();
      };

      callNew();
  }, [debouncedValue]);

  const handleLoadMore = React.useCallback(() => {
      const callNew = async () => {
        setError(null);
        if(endPages >= page){
            setDisable(true);
            const {totalPages, resMembers} = await fetchMembers( page, search );
            if(totalPages !== -1){
                setMembers([...members, ...mapCharacterListFromApiToVm(resMembers)]);
            }else{
                setError("Error al cargar más personajes");
            }
            // console.log("page", page, "endPages", endPages);
            setPage(page + 1);
            // console.log("page", page, "endPages", endPages);
            setDisable(false);
        }
      }
      
      callNew();
  }, [endPages, page, members, debouncedValue]  );

  return (
            <ApiFetchContext value={{ disable, members, handleLoadMore, search, setSearch, endPages, isEnd: (page >= endPages), error }}>
                {children}
            </ApiFetchContext>
         );
};