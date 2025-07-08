import { defineCollection, reference, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/projects" }),
  schema: z.object({
    title: z.string(),
    body: z.string().optional(),
    heroImage: z.string().optional(),
    type: z.string().optional(),
    attachments: z.array(z.string()).optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/experience" }),
  schema: z.object({
    role: z.string(),
    company: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: "./src/data/pages" }),
  schema: z.object({
    title: z.string(),
    body: z.string().optional().optional(),
  }),
});
 
// Export all collections
export const collections = { projects, experience, pages };