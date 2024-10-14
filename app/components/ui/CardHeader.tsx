import Badge from "~/components/ui/Badge";
import { TCardHeader } from "~/components/types";
type Props = TCardHeader;

export default function CardHeader({ badgeText, badgeIcon, title }: Props) {
  return (
    <div className="flex flex-col gap-10 pt-16 px-5 text-center">
      <div className="mx-auto">
        <Badge text={badgeText} icon={badgeIcon} />
      </div>
      <h2 className="text-h2-mobile md:text-h2-tablet lgTablet:text-h2-desktop mb-4">
        {title}
      </h2>
    </div>
  );
}
