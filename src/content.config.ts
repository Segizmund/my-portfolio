import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const taskSchema = z.object({
    title: z.string(),
    text: z.string(),
});

const projectsCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: z.object({
        order: z.number().optional().default(99),
        id: z.string(),
        category: z.enum(['main', 'freelance', 'pet-project']).default('main'),
        link: z.string().optional(),
        titleRu: z.string(),
        titleUs: z.string(),
        descriptionRu: z.string(),
        descriptionUs: z.string(),
        aboutRu: z.string().optional(),
        aboutUs: z.string().optional(),
        previewUrl: z.string().optional(),
        arrayImgUrls: z.array(z.string()).optional(),
        stack: z.array(z.string()).default([]),
        tasksRu: z.array(taskSchema).default([]),
        tasksUs: z.array(taskSchema).default([]),
    }),
});

export const collections = {
    projects: projectsCollection,
};