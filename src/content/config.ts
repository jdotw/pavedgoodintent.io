import { image, z, defineCollection } from "astro:content";
const episodesCollection = defineCollection({
  schema: z.object({
	season: z.number(),
	episode: z.number(),
    title: z.string(),
    subtitle: z.string().optional(),
    tags: z.array(z.string()).default(["article"]),
    youtube_id: z.string(),
    youtube_list: z.string(),
	podcast: z.string(),
    excerpt: z.string().optional(),
    date: z.string().transform((str) => new Date(str)),
  }),
});
export const collections = {
  episodes: episodesCollection,
};
