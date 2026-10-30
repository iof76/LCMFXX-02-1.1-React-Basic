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
  const [ isEnd, setIsEnd ] = React.useState<boolean>(false);
  const [ disable, setDisable ] = React.useState<boolean>(false);
  const [ search, setSearch ] = React.useState<string>("");
  const debouncedValue = useDebounce(search, 500);
  const checkIsEnd = () => { if(page === endPages){setIsEnd(true)} }

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
        if(endPages >= page){
            setDisable(true);
            const {resMembers} = await fetchMembers( page, search );
            setMembers([...members, ...mapCharacterListFromApiToVm(resMembers)]);
            setPage(page + 1);
            checkIsEnd();
            setDisable(false);
        }
      }
      
      callNew();
  }, [endPages, page, members, debouncedValue]  );

  return (
            <ApiFetchContext value={{ disable, members, handleLoadMore, search, setSearch, endPages, isEnd }}>
                {children}
            </ApiFetchContext>
         );
};