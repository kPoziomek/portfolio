import { db } from "~/db.server";
import { blogs } from "../../drizzle/schema";
import { eq } from "drizzle-orm";
import { Blogs, CreateBlogSchema, parseBlog } from "~/schemas/blogs";

export async function getBlogs(): Promise<Blogs[]> {
  const result = await db.select().from(blogs).all();
  return result.map(parseBlog);
}

export async function getBlog(id: number): Promise<Blogs | null> {
  const result = db.select().from(blogs).where(eq(blogs.id, id)).get();
  return result ? parseBlog(result) : null;
}

export async function createBlog({
  title,
  content,
}: {
  title: string;
  content: string;
}): Promise<Blogs> {
  const validatedData = CreateBlogSchema.parse({ title, content });
  const result = db.insert(blogs).values(validatedData).returning().get();
  return parseBlog(result);
}

export async function updateBlog(
  id: number,
  { title, content }: { title: string; content: string }
) {
  return db.update(blogs).set({ title, content }).where(eq(blogs.id, id)).run();
}

export async function deleteBlog(id: number) {
  return db.delete(blogs).where(eq(blogs.id, id)).run();
}
