import CardLayout from "~/components/CardLayout";
import CardHeader from "~/components/ui/CardHeader";
import CustomButton from "~/components/ui/CustomButton";
import BlogCard from "~/components/ui/BlogCard";

export default function Blog() {
  return (
    <CardLayout cardId="contacts">
      <CardHeader
        badgeText="contacts"
        badgeIcon="FiPenTool"
        title="I also write some stories about my projects"
      />
      <div className="md:grid py-16 mx-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="text-center pt-10">
          <CustomButton to="/contacts" title="See all the contacts posts" />
        </div>
      </div>
    </CardLayout>
  );
}
