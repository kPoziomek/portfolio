import React from "react";
import { Link } from "@remix-run/react";

type Props = {
  to: string;
  title: string;
  type?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function CustomButton({
                                       to,
                                       title,
                                       type = "primary",
                                       size = "md",
                                       className,
                                     }: Props) {
  const buttonSize = {
    sm: "px-4 py-2",
    md: "px-6 py-3",
    lg: "px-8 py-4",
  };

  const buttonType = {
    primary: "bg-HighlightDark text-white",
    secondary: "border-2 border-HighlightDark text-HighlightDark",
    tertiary: "bg-white text-black",
  };

  return (
    <Link
      to={to}
      className={`scroll-smooth text-center font-bold ${buttonSize[size]} ${buttonType[type]} rounded-full w-full ${className}`}
      rel="noreferrer"
    >
      {title}
    </Link>
  );
}
