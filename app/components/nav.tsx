import { useState, useEffect } from "react";
import { useScreenSize } from "~/components/hooks/useScreenSize";

import IconWrapper from "~/components/ui/IconWrapper";
import NavigationItem from "~/components/ui/NavItem";
import CustomButton from "~/components/ui/CustomButton";
import cx from "~/utils/cx";

export default function Nav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // Start animation after 500ms
  }, []);
  const [expanded, setExpanded] = useState(false);
  const deviceType = useScreenSize().width < 1024 ? "mobile" : "desktop";

  const closeMenu = () => {
    setExpanded(false);
  };

  const navigationItems = [
    {
      element: (
        <NavigationItem
          to="#work"
          title="Works"
          type={deviceType}
          handleClick={closeMenu}
        />
      ),
      id: 1,
    },
    {
      element: (
        <NavigationItem
          to="#tools"
          title="Tools"
          type={deviceType}
          handleClick={closeMenu}
        />
      ),
      id: 2,
    },
    {
      element: <NavigationItem to="#skills" title="Skills" type={deviceType} />,
      id: 3,
    },
    {
      element: (
        <NavigationItem
          to="#testimonials"
          title="Testimonials"
          type={deviceType}
        />
      ),
      id: 4,
    },
    {
      element: (
        <NavigationItem to="#pricing" title="Pricing" type={deviceType} />
      ),
      id: 5,
    },
    {
      element: (
        <NavigationItem to="#contacts" title="contacts" type={deviceType} />
      ),
      id: 6,
    },
    {
      element: (
        <CustomButton
          title="Contact"
          to="#"
          className="inline-block sm:w-3/4 md:w-2/3 lgTablet:w-full"
        />
      ),
      id: 7,
    },
  ];

  return (
    <nav
      className={cx(
        `fixed top-0 left-0 w-full bg-white p-4 z-50 transition-transform duration-1000 ease-in-out py-5 px-6 xl:p-3 xl:px-20 lgTablet:flex justify-between`,
        {
          "translate-y-0": isVisible,
          "-translate-y-full": !isVisible,
          "rounded-bl-3xl rounded-br-3xl": expanded,
        }
      )}
    >
      <div
        className={cx("flex gap-1 items-center justify-between", {
          "pb-6 ": expanded,
        })}
      >
        <div className="logo">
          <p className="text-p-mobile font-bold leading-5">
            Krzysztof Poziomek
          </p>
        </div>
        {deviceType === "mobile" && (
          <button
            type="button"
            onClick={() => setExpanded((prevState) => !prevState)}
            aria-label={expanded ? "Close menu" : "Open menu"}
            className="lgTablet:hidden"
          >
            <IconWrapper
              name={expanded ? "FiX" : "FiMenu"}
              size={24}
              className="stroke-black"
            />
          </button>
        )}
      </div>
      <div
        className={cx(
          "overflow-hidden transition-all !duration-500 ease-in-out",
          {
            "max-h-0 opacity-0 ": !expanded && deviceType === "mobile",
            "max-h-screen opacity-100": expanded || deviceType === "desktop",
          }
        )}
      >
        <ul
          className={cx(
            "text-center",
            deviceType === "mobile"
              ? "flex flex-col items-center"
              : "flex flex-row items-center justify-end gap-7 mt-0"
          )}
        >
          {navigationItems.map((item) => (
            <li
              key={item.id}
              className={cx(
                "w-full pb-6 lgTablet:pb-0 transition-all !duration-500 ease-in-out",
                {
                  "opacity-0 translate-y-2":
                    !expanded && deviceType === "mobile",
                  "opacity-100 translate-y-0":
                    expanded || deviceType === "desktop",
                }
              )}
              style={{
                transitionDelay: `${
                  expanded && deviceType === "mobile" ? item?.id * 75 : 175
                }ms`,
              }}
            >
              {item.element}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
