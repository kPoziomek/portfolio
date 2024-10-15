import IconWrapper from "~/components/ui/IconWrapper";
import { TBadge } from "~/components/types";

type Props = TBadge;

export default function Badge({ text, icon }: Props) {
  return (
    <div className="flex items-center gap-2 bg-HighlightLight2 border border-white rounded-3xl px-6 py-2">
      <p className="text-p-desktop">{text}</p>
      <IconWrapper name={icon} size={24} className="stroke-black" />
    </div>
  );
}
