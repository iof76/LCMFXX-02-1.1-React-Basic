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
            <div className="text-center">
              <button className="btn btn-primary mx-auto my-9" onClick={handleLoadMore} disabled={isEnd}>Cargar más</button>  
            </div>
          </>
        )
      }
};
