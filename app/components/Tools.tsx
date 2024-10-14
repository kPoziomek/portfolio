import ToolCard from "~/components/ui/ToolCard";
import CardHeader from "~/components/ui/CardHeader";
import CardLayout from "~/components/CardLayout";
import CardContainer from "~/components/ui/CardContainer";

export default function Tools() {
  return (
    <CardLayout cardId="tools" fullHeight={false}>
      <CardHeader
        title="These are the tools I use"
        badgeIcon="FiTool"
        badgeText="My Tools"
      />
      <CardContainer>
        <>
          <ToolCard
            tool="React"
            description="A JavaScript library for building user interfaces"
          />
          <ToolCard
            tool="TypeScript"
            description="An open-source language which builds on JavaScript"
          />
          <ToolCard
            tool="Tailwind CSS"
            description="A utility-first CSS framework for building custom designs"
          />
          <ToolCard
            tool="Figma"
            description="A vector graphics editor and prototyping tool"
          />
          <ToolCard
            tool="GitHub"
            description="A web-based Git repository hosting service"
          />
          <ToolCard
            tool="Vercel"
            description="A cloud platform for static sites and Serverless Functions"
          />
        </>
      </CardContainer>
    </CardLayout>
  );
}
