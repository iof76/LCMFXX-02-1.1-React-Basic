interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export const InputSearch = (props: Props) => {      
    const { search, setSearch } = props;
      return (
          <div className="user-list-search">
            <label htmlFor="search">Buscar:</label>
            <input
              type="text"
              id="search"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar..."
            />
          </div>
    )
};
