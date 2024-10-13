import CustomButton from "~/components/ui/CustomButton";
import { PiHandEyeDuotone } from "react-icons/pi";
import { useContext } from "react";
import { IconContext } from "~/components/context/iconContext";

export default function Welcome() {
  const { size, color } = useContext(IconContext);

  return (
    <section
      id="welcome"
      className="h-[100vh] bg-white flex justify-center relative w-full overflow-hidden pb-10 rounded-3xl shadow-md"
    >
      <div className="overlay1" />
      <div className="overlay2" />
      <div className=" md:container mx-auto hero-section">
        <div className="heroContent ">
          <div className="sectionTitle">
            <div className="text-center pb-10">
              <p className="flex justify-center items-center gap-2.5">
                Hi I'm Poziom{" "}
                <div>
                  <PiHandEyeDuotone size={size} color={color} />
                </div>
              </p>
              <h1 className="text-h1-mobile md:text-h1-tablet lg:text-h1-desktop">
                I'm a WebDeveloper{" "}
              </h1>
            </div>
            <div className="md:container sectionButtons flex flex-col md:flex-row justify-center items-center gap-2">
              <CustomButton to="#work" title="My work" className="md:w-1/5" />
              <CustomButton
                to="#about"
                title="About me"
                type="secondary"
                className="md:w-1/5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
