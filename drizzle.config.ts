import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./drizzle/schema.ts",
  dbCredentials: {
    url: "./sqlite.db",
  },
  out: "./drizzle",
});
