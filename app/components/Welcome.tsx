import CustomButton from "~/components/ui/CustomButton";
import { PiHandEyeDuotone } from "react-icons/pi";
import { useContext, useEffect, useState } from "react";
import cx from "~/utils/cx";
import { IconContext } from "~/components/context/iconContext";

export default function Welcome() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // Start animation after 500ms
  }, []);
  const { size, color } = useContext(IconContext);

  return (
    <section
      id="welcome"
      className={cx(
        `h-[100vh] bg-white flex justify-center relative w-full overflow-hidden pb-10 rounded-3xl shadow-md 
        transition-all duration-1000 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } delay-100`
      )}
    >
      <div className="overlay1" />
      <div className="overlay2" />
      <div className=" md:container mx-auto hero-section">
        <div className="heroContent ">
          <div className="sectionTitle">
            <div className="text-center pb-10">
              <div className="flex justify-center items-center gap-2.5">
                <p className="flex justify-center items-center gap-2.5">
                  Hi I&#39;m Poziom{" "}
                  <PiHandEyeDuotone size={size} color={color} />
                </p>
              </div>
              <h2 className="text-h1-mobile md:text-h1-tablet lg:text-h1-desktop">
                I&#39;m a WebDeveloper{" "}
              </h2>
            </div>
            <div className="md:container sectionButtons flex flex-col md:flex-row justify-center items-center gap-2">
              <CustomButton
                to="#work"
                title="My work"
                className={`md:w-1/5 transition-all duration-500 ease-in-out ${
                  isVisible ? "opacity-100" : "opacity-0"
                } delay-500`}
              />
              <CustomButton
                to="#about"
                title="About me"
                type="secondary"
                className={`md:w-1/5 transition-all duration-500 ease-in-out ${
                  isVisible ? "opacity-100" : "opacity-0"
                } delay-300`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
