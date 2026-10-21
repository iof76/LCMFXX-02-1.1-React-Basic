export const fetchMembers = async(page: number) => {
    const response = await fetch(`/api/characters?page=${page}`);
    const json = await response.json();

    console.log("fetchMembers", json);

    if(!response.ok){
      throw new Error(`Error ${response.status} al cargar personajes`);
    }

    const totalPages = (!!json.info?.pages) ? json.info.pages : 0;
    const resMembers = (!!json?.results?.length) ? json.results : [];

    return {totalPages, resMembers};
}

export const fetchSingleMember = async(id: number) => {
    const response = await fetch(`/api/characters/${id}`);
    const json = await response.json();

    console.log("fetchSingleMember", json);

    if(!response.ok){
      throw new Error(`Error ${response.status} al cargar personaje`);
    }

    const resMember = (json) ? json : null;

    return { resMember };
}