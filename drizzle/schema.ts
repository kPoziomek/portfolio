import { sqliteTable, text, integer, blob } from "drizzle-orm/sqlite-core";

export const blogs = sqliteTable("blogs", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  content: text("content").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$default(() => new Date()),
});

export const works = sqliteTable("works", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  logo: text("logo").notNull(),
  description: text("description").notNull(),
  image: blob({ mode: "json" }).notNull(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$default(() => new Date()),
});
