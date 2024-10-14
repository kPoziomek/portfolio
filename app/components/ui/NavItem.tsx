import { Link } from "@remix-run/react";

type Props = {
  to: string;
  title: string;
  type?: "desktop" | "mobile";
  size?: "md" | "lg";
  className?: string;
  handleClick?: () => void;
};

export default function NavigationItem({
  to,
  title,
  type = "mobile",
  size = "lg",
  className,
  handleClick,
}: Props) {
  const linkSize = {
    md: "mediumParagraph",
    lg: "largeParagraph",
  };

  if (type === "mobile") {
    return (
      <h3
        onClick={handleClick}
        className={`text-h3-mobile md:text-h3-tablet lgTablet:text-h3-desktop ${className}`}
      >
        <Link to={to}>{title}</Link>
      </h3>
    );
  }

  return (
    <Link
      onClick={handleClick}
      to={to}
      className={`link ${className} ${linkSize[size]}`}
    >
      {title}
    </Link>
  );
}
