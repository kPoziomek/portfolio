import { createContext, useState, ReactNode } from "react";

type IconContextType = {
  color: string;
  className: string;
  size: number;
  changeSize: (newSize: number) => void;
};

export const IconContext = createContext<IconContextType>(
  {} as IconContextType
);

const IconProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [size, setSize] = useState(42);

  const changeSize = (newSize: number) => {
    setSize(newSize);
  };

  return (
    <IconContext.Provider
      value={{
        color: "#083a3a",
        className: "global-class-name",
        size: size,
        changeSize,
      }}
    >
      <div>{children}</div>
    </IconContext.Provider>
  );
};

export default IconProvider;
