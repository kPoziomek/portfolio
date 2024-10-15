import { json, type ActionFunction } from "@remix-run/node";
import { createBlog } from "~/models/blog.server";

const authenticateRequest = (request: Request) => {
  const authToken = request.headers.get("Authorization");
  if (authToken !== process.env.API_SECRET) {
    throw new Response("Unauthorized", { status: 401 });
  }
};

export const action: ActionFunction = async ({ request }) => {
  authenticateRequest(request);

  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const body = await request.json();
    const { title, content } = body;

    if (!title || !content) {
      return json({ error: "Title and content are required" }, { status: 400 });
    }

    const newPost = await createBlog({ title, content });
    return json({ post: newPost }, { status: 201 });
  } catch (error) {
    console.error("Failed to create post:", error);
    return json({ error: "Failed to create post" }, { status: 500 });
  }
};

// Ta trasa nie renderuje niczego, jest tylko do obsługi API
export default function ApiPostsRoute() {
  return null;
}
