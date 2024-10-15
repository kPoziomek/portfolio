import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getBlogs } from "~/models/blog.server";

export const loader = async () => {
  return json({ blogs: await getBlogs() });
};

export default function BlogIndex() {
  const { blogs } = useLoaderData<typeof loader>();

  console.log(blogs);
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {blogs.map((blog) => (
          <a key={blog.id} href={`/blogs/${blog.id}`}>
            <li>{blog.title}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}
