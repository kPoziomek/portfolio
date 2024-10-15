import * as Icons from "react-icons/fi";
import WorkCard from "~/components/ui/WorkCard";
import { useEffect, useState } from "react";
type TWorkItem = {
  id: string;
  companyName: string;
  companyLogo: keyof typeof Icons;
};
export default function Work() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // Start animation after 500ms
  }, []);
  const workItems: Array<TWorkItem> = [
    {
      id: crypto.randomUUID(),
      companyName: "Company 1",
      companyLogo: "FiWind",
    },
    {
      id: crypto.randomUUID(),
      companyName: "Company 2",
      companyLogo: "FiWind",
    },
    {
      id: crypto.randomUUID(),
      companyName: "Company 3",
      companyLogo: "FiWind",
    },
    {
      id: crypto.randomUUID(),
      companyName: "Company 4",
      companyLogo: "FiWind",
    },
  ];

  return (
    <section
      id="work"
      className={`min-h-screen bg-new-gradient flex items-center justify-center px-2 flex-col gap-10 relative z-10 rounded-[40px] shadow-2xl transition-all duration-1000 ease-in-out ${
        isVisible
          ? "opacity-100 mt-[calc((-64px-220px-120px)*2)] sm:mt-[calc((-64px-230px-120px)*2)] lgTablet:mt-[calc((-88px-200px-120px)*2)] "
          : "opacity-0"
      } delay-100`}
    >
      {workItems.map((item) => {
        return (
          <WorkCard
            companyName={item.companyName}
            companyLogo={item.companyLogo}
            key={item.id}
          />
        );
      })}
    </section>
  );
}
