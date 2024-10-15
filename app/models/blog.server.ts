import { db } from "~/db.server";
import { blogs } from "../../drizzle/schema";
import { eq } from "drizzle-orm";

export async function getBlogs() {
  return db.select().from(blogs).all();
}

export async function getBlog(id: number) {
  return db.select().from(blogs).where(eq(blogs.id, id)).get();
}

export async function createBlog({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return db.insert(blogs).values({ title, content }).run();
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
