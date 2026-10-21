import type * as apiModel from "./api";
import type { Character } from "#common/models";

const mapCharacterFromApiToVm = (
  character: apiModel.CharacterApiModel,
): Character => ({
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  image: character.image,
});

export const mapCharacterListFromApiToVm = (
  characterPage: apiModel.CharacterPageApiModel,
): Character[] =>
  characterPage
    ? characterPage.map(mapCharacterFromApiToVm)
    : [];
