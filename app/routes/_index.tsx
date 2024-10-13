import type { MetaFunction } from "@remix-run/node";
import Nav from "~/components/nav";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Krzysztof Poziomek web portfolio" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-7">
      <Nav/>
      <main className="px-2 mt-20  md:px-5 md:mt-[10vh] lg:px-7 lg:mt-[15vh]">

      </main>
    </div>
  );
}

