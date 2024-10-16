import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function CardContainer({ children }: Props) {
  return (
    <div className="md:grid py-10 mx-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {children}
      </div>
    </div>
  );
}
