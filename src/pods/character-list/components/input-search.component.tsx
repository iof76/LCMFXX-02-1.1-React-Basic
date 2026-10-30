interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export const InputSearch = (props: Props) => {      
    const { search, setSearch } = props;

      return (
          <div className="user-list-search">
            <label className="floating-label" htmlFor="search">
              <span>Buscar:</span>
              <input
                className="input aria-invalid:input-error w-full"
                type="text"
                id="search"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Introduce tu busqueda..."
              />
            </label>
          </div>
    )
};
