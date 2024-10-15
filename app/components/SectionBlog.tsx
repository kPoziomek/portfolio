import CardLayout from "~/components/CardLayout";
import CardHeader from "~/components/ui/CardHeader";
import CustomButton from "~/components/ui/CustomButton";
import BlogCard from "~/components/ui/BlogCard";
import { Link, useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/_index";

export default function SectionBlogs() {
  const { blogs } = useLoaderData<typeof loader>();
  const blogTitle =
    blogs.length > 0
      ? "I also write some stories about my projects"
      : "Currently I'm writing some stories about my projects";

  return (
    <CardLayout cardId="blog">
      <CardHeader badgeText="Blogs" badgeIcon="FiPenTool" title={blogTitle} />
      <div className="md:grid py-16 mx-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.length > 0 &&
            blogs?.map((blog) => {
              return (
                <Link key={blog.id} to={`blogs/${blog.id}`}>
                  <BlogCard title={blog.title} date={blog?.createdAt} />
                </Link>
              );
            })}
        </div>
        {blogs.length > 0 && (
          <div className="text-center pt-10">
            <CustomButton to="/blogs" title="See all the contacts posts" />
          </div>
        )}
      </div>
    </CardLayout>
  );
}
