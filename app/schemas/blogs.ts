import { z } from "zod";
import { blogs } from "../../drizzle/schema";

export const BlogSchema = z.object({
  id: z.number().optional(),
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be 100 characters or less"),
  content: z.string().min(1, "Content is required"),
  createdAt: z.date().optional(),
});

export type Blogs = z.infer<typeof BlogSchema>;

export function parseBlog(blog: typeof blogs.$inferSelect): Blogs {
  return BlogSchema.parse({
    ...blog,
    createdAt: blog.createdAt ? new Date(blog.createdAt) : undefined,
  });
}

export const CreateBlogSchema = BlogSchema.omit({ id: true, createdAt: true });
export type CreateBlog = z.infer<typeof CreateBlogSchema>;
