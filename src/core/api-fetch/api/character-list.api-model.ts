import { z } from "zod";

export const characterSchema = z.object({
  id: z.number(),
  name: z.string(),
  status: z.enum(["Alive", "Dead", "unknown"]),
  species: z.string(),
  gender: z.string(),
  image: z.url(),
  origin: z.string(),
  location: z.string(),
  episodeCount: z.number(),
});

export type CharacterApiModel = z.infer<typeof characterSchema>;
