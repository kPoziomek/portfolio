import CardLayout from "~/components/CardLayout";
import CustomButton from "~/components/ui/CustomButton";
import cx from "~/utils/cx";

export default function About() {
  return (
    <CardLayout
      cardId="about"
      className="items-center justify-center"
      fullHeight={false}
    >
      <div
        className={cx(
          "flex flex-col md:flex-row justify-between px-6 py-7 lg:px-10 lg:py-8 rounded-[40px] w-full shadow-xl",
          {
            "bg-orange-100": true,
          }
        )}
      >
        <div className="flex flex-col justify-center gap-8 md:gap-36">
          <div className="block md:hidden w-full max-h-[550px] md:w-full px-4 pt-4 lg:w-1/2 lg:px-8 lg:pt-0 overflow-hidden">
            <img
              src="https://picsum.photos/536/354"
              alt="company logo"
              className=" w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex flex-col items-stretch gap-10 ">
            <div className="">
              <h3>Hi, I&#39;m Krzysztof</h3>
              <p className="text-p-mobile text-TextSecondary leading-10">
                I&#39;m a web developer based in Krakow.
              </p>
              <p className="text-p-mobile text-TextSecondary leading-8">
                I have a passion for web development
              </p>
              <p className="text-p-mobile text-TextSecondary leading-10">
                I have experience in creating websites and web apps React Remix,
                and Node.js.
              </p>
            </div>

            <div className=" flex md:w-1/2 gap-2">
              <CustomButton
                to="mailto:krzysztof.poziomek@gmail.com"
                title="Send me a message"
              />
            </div>
          </div>
        </div>
        <div className="hidden grow md:block md:w-1/2 px-4 pt-4 lg:w-1/2 lg:px-8 lg:pt-0">
          <img
            src="https://picsum.photos/354/549"
            alt="company logo"
            className=" w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </CardLayout>
  );
}
