import type * as Icons from "react-icons/fi";
import { ReactNode } from "react";

export type TSocialItems = {
  title: string;
  socialIcon: keyof typeof Icons;
  id?: number;
  to: string;
  className: string;
};

export type TCardLayout = {
  children: ReactNode;
  cardId: string;
  className?: string;
  fullHeight?: boolean;
};
export type TCardHeader = {
  badgeText: string;
  badgeIcon: keyof typeof Icons;
  title: string;
};

export type TCustomButton = {
  to: string;
  title: string;
  type?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export type TBadge = {
  text: string;
  icon: keyof typeof Icons;
};

export type TIcon = {
  name: keyof typeof Icons;
  size?: number;
  color?: string;
  className?: string;
};

export type TWorkCard = {
  companyName?: string;
  companyLogo?: keyof typeof Icons;
};
