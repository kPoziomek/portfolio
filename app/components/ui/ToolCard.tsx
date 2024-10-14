import IconWrapper from "~/components/ui/IconWrapper";
import type * as Icons from "react-icons/fi";
type Props = {
  tool: string;
  description: string;
  iconName?: keyof typeof Icons;
};

export default function ToolCard({
  tool,
  description,
  iconName = "FiTool",
}: Props) {
  return (
    <div className="rounded-2xl bg-white flex items-center p-6 gap-4">
      <div className="p-4 bg-HighlightLight2 rounded-xl">
        <IconWrapper
          name={iconName}
          size={44}
          className="stroke-black max-h-11"
        />
      </div>
      <div>
        <p className="text-p-desktop font-bold tracking-wider">{tool}</p>
        <p className="text-p-mobile text-TextSecondary">{description}</p>
      </div>
    </div>
  );
}
