export const fetchMembers = async(page: number) => {
    
    try{
      const response = await fetch(`/api/characters?page=${page}`);
      const json = await response.json();

      if(!response.ok){
        throw new Error(`Error ${response.status} al cargar personajes`);
      }

      const totalPages = (!!json.info?.pages) ? json.info.pages : 0;
      const resMembers = (!!json?.results?.length) ? json.results : [];

      return {totalPages, resMembers};
    }catch(e){
      console.error(e);
      return {totalPages: 0, resMembers: []};
    }
}

export const fetchSingleMember = async(id: number) => {
    const response = await fetch(`/api/characters/${id}`);
    const json = await response.json();

    if(!response.ok){
      throw new Error(`Error ${response.status} al cargar personaje`);
    }

    const resMember = (json) ? json : null;

    return { resMember };
}