import IconWrapper from "~/components/ui/IconWrapper";
import { Link } from "@remix-run/react";
import { TSocialItems } from "~/components/types";

type Props = TSocialItems;

export default function SocialItem({
  title = "GitHub",
  socialIcon = "FiGithub",
  className,
  to = "/",
}: Props) {
  return (
    <Link
      to={to}
      className="group text-gray-700 px-1 py-0.5 bg-custom-base transition duration-300 ease-in-out hover:bg-custom-saturated-1 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-custom-saturated-2 focus:bg-custom-saturated-2 focus:text-gray-900 active:bg-custom-saturated-3 active:text-gray-900 rounded-2xl w-full"
    >
      <div
        className={`py-4 pl-5 pr-6 flex items-center rounded-2xl w-full gap-2.5 ${className}`}
      >
        <div className="p-2.5 bg-HighlightLight2 rounded-xl">
          <IconWrapper name={socialIcon} size={24} className="stroke-black" />
        </div>
        <div className="flex justify-between items-center gap-2.5 grow">
          {title}
          <IconWrapper
            name="FiArrowUpRight"
            size={28}
            className="stroke-black transform
          group-hover:scale-125
          transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </Link>
  );
}
