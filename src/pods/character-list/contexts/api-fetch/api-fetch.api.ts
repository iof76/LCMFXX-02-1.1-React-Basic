import { validateResponse } from "#common/helpers";
import { characterPageSchema, type CharacterPageApiModel } from "./api/character-list.api-model";


export const fetchMembers = async(page: number, name: string) => {
    try{
      const query = (!!name) ? `&name=${name}` : '';
      const response = await fetch(`/api/characters?page=${page}${query}`);
      
      const json = await response.json();


      if(!response.ok){
        throw new Error(`Error ${response.status} al cargar personajes`);
      }

      const validatedData : CharacterPageApiModel = validateResponse(characterPageSchema, json);  

      const totalPages = (!!validatedData.info?.pages) ? validatedData.info.pages : 0;
      const resMembers = (!!validatedData.results?.length) ? validatedData.results : [];

      return {totalPages, resMembers};
    }catch(e){
      console.error(e);
      return {totalPages: -1, resMembers: []};
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