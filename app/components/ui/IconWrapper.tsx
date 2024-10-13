import * as Icons from "react-icons/fi";

type Props = {
  name: keyof typeof Icons;
  size?: number;
  color?: string;
  className?: string;
};

export default function IconWrapper({
                                      name,
                                      size = 24,
                                      color = "black",
                                      className = "",
                                    }: Props) {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.warn(`Ikona ${name} nie istnieje w react-icons/fi.`);
    return null;
  }

  return <IconComponent size={size} color={color} className={className} />;
}
