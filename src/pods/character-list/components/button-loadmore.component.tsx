import { Spinner } from "#common/components";

interface Props {
  disable: boolean;
  isEnd: boolean;
    handleLoadMore: () => void;
}

export const ButtonLoadMore = (props: Props) => {      
    const { handleLoadMore, isEnd, disable } = props;

      if (disable) {
        return ( <Spinner /> );
      }else{
        return (
          <>
            <button className="btn-loadmore" onClick={handleLoadMore} disabled={isEnd}>Cargar más</button>  
          </>
        )
      }
};
