import type * as Icons from "react-icons/fi";
import IconWrapper from "~/components/ui/IconWrapper";
import CustomButton from "~/components/ui/CustomButton";
import cx from "~/utils/cx";

type Props = {
  bgColor: string;
  companyName?: string;
  companyLogo?: keyof typeof Icons;
};

export default function WorkCard({
  bgColor,
  companyLogo = "FiWind",
  companyName,
}: Props) {
  return (
    <div
      className={cx(
        "flex flex-col md:flex-row justify-between px-6 py-7 lg:px-10 lg:py-8 rounded-[40px] w-full shadow-xl",
        {
          "bg-indigo-100": bgColor === "indigo",
          "bg-orange-100": bgColor === "orange",
        }
      )}
    >
      <div className="flex flex-col gap-8 md:gap-36">
        <div className="flex gap-2.5">
          {companyLogo && (
            <IconWrapper
              name={companyLogo}
              size={24}
              className="stroke-black max-h-11"
            />
          )}
          {companyName && <p>{companyName}</p>}
        </div>
        <div className="block md:hidden w-full max-h-[550px] md:w-full px-4 pt-4 lg:w-1/2 lg:px-8 lg:pt-0 overflow-hidden">
          <img
            src="https://picsum.photos/536/354"
            alt="company logo"
            className=" w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col items-stretch gap-10">
          <div>
            <h5>companyName</h5>
            <h2>Company descriptions</h2>
          </div>

          <div className=" flex gap-2">
            <CustomButton to="#" title="Case study" />
            <CustomButton to="#" title="Visit website" type="secondary" />
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 px-4 pt-4 lg:w-1/2 lg:px-8 lg:pt-0">
        <img
          src="https://picsum.photos/354/549"
          alt="company logo"
          className=" w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}
