import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getBlog } from "~/models/blog.server";

export const loader: LoaderFunction = async ({ params }) => {
  const slug = params.slug as string;
  return json({ blog: await getBlog(slug) });
};

export default function BlogsSlug() {
  const { blog } = useLoaderData<typeof loader>();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-8">
        {new Date(blog.createdAt).toLocaleDateString()}
      </p>
      <div className="prose lg:prose-xl">{blog.content}</div>
    </div>
  );
}
