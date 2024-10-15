import { json, redirect, type ActionFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { createBlog } from "~/models/blog.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const content = formData.get("content");

  if (typeof title !== "string" || typeof content !== "string") {
    return json(
      {
        errors: { title: "Title is required", content: "Content is required" },
      },
      { status: 400 }
    );
  }

  await createBlog({ title, content });
  return redirect("/posts");
};

export default function NewPost() {
  const actionData = useActionData<typeof action>();

  return (
    <Form method="post">
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required />
        {actionData?.errors?.title && <p>{actionData.errors.title}</p>}
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea id="content" name="content" required />
        {actionData?.errors?.content && <p>{actionData.errors.content}</p>}
      </div>
      <button type="submit">Create Post</button>
    </Form>
  );
}
