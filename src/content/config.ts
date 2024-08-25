// @ts-ignore
import { defineCollection, z } from 'astro:content';

import { createReader } from "@keystatic/core/reader";
const Blogs = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    thumbnail: z.string().optional(),
    desc:z.string().optional()
  }),
});
const pages = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string().min(1, 'Page Title is required'),
    seo: z.object({
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
    }).optional(),
    content: z.string().optional(), // You may adjust this type according to how you handle content
  }),
});
const LegalDocuments = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seo: z.object({
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
    }).optional(),
    content: z.string().optional(),
  })
});

export const collections = { Blogs, pages, LegalDocuments };
