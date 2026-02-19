import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Ravi Chandu'),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    archived: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    technologies: z.array(z.string()),
    link: z.string().optional(),
    github: z.string().optional(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    category: z.enum(['Power BI', 'Power Apps', 'SQL', 'Data Analysis']),
  }),
});

export const collections = { blog, projects };
