import { defineCollection, reference, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/projects" }),
  schema: z.object({
    title: z.string(),
    body: z.string().optional(),
    heroImage: z.string().optional(),
    type: z.string().optional(),
    status: z.string().optional(),
    description: z.string().optional(),
    attachments: z.array(z.string()).optional(),
    tags: z.array(z.string()),
  }),
});

const experiences = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/data/experience" }),
  schema: z.object({
    role: z.array(z.string()),
    company: z.string().optional(),
    location: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
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
export const collections = { projects, experiences, pages };