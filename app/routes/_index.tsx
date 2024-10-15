import { json, MetaFunction } from "@remix-run/node";
import Nav from "~/components/nav";
import Welcome from "~/components/Welcome";
import IconProvider from "~/components/context/iconContext";
import Work from "~/components/Work";
import Tools from "~/components/Tools";
import Testimonials from "~/components/Testimonials";
import SectionBlog from "~/components/SectionBlog";
import About from "~/components/About";
import Footer from "~/components/Footer";
import { getBlogs } from "~/models/blog.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Krzysztof Poziomek web portfolio" },
  ];
};
export const loader = async () => {
  return json({ blogs: await getBlogs() });
};

export default function Index() {
  return (
    <IconProvider>
      <div className="flex flex-col gap-7 bg-PrimaryBackgroundColor">
        <Nav />
        <main className="px-2 mt-20 md:px-5 lg:px-7 md:mt-[95px] lg:mt-[100px]">
          <div className="max-w-[1550px] mx-auto">
            <Welcome />
            <Work />
            <Tools />
            <Testimonials />
            <SectionBlog />
            <About />
          </div>
        </main>
        <Footer />
      </div>
    </IconProvider>
  );
}
