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
      id: crypto.randomUUID(),
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
      id: crypto.randomUUID(),
    },
    {
      element: <NavigationItem to="#skills" title="Skills" type={deviceType} />,
      id: crypto.randomUUID(),
    },
    {
      element: (
        <NavigationItem
          to="#testimonials"
          title="Testimonials"
          type={deviceType}
        />
      ),
      id: crypto.randomUUID(),
    },
    {
      element: (
        <NavigationItem to="#pricing" title="Pricing" type={deviceType} />
      ),
      id: crypto.randomUUID(),
    },
    {
      element: (
        <NavigationItem to="#contacts" title="contacts" type={deviceType} />
      ),
      id: crypto.randomUUID(),
    },
    {
      element: (
        <CustomButton
          title="Contact"
          to="#"
          className="inline-block sm:w-3/4 md:w-2/3 lgTablet:w-full"
        />
      ),
      id: crypto.randomUUID(),
    },
  ];

  return (
    <nav
      className={cx(
        `fixed top-0 left-0 w-full bg-white p-4 z-50 transition-transform duration-1000 ease-in-outright-0 py-5 px-6 xl:p-3 xl:px-20 lgTablet:flex justify-between ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`,
        {
          "rounded-bl-3xl rounded-br-3xl p-6 px-6": expanded,
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
        <div className="hamburger lgTablet:hidden ">
          <button
            type="button"
            onClick={() => setExpanded((prevState) => !prevState)}
          >
            {!expanded ? (
              <IconWrapper name="FiMenu" size={24} className="stroke-black" />
            ) : (
              <IconWrapper name="FiX" size={24} className="stroke-black" />
            )}
          </button>
        </div>
      </div>
      <ul
        className={cx(
          "text-center flex flex-col items-center lgTablet:flex-row lgTablet:gap-7",
          {
            "visible flex": expanded,
            hidden: !expanded && deviceType === "mobile",
          }
        )}
      >
        {navigationItems.map((item) => (
          <li className="w-full pb-6 lgTablet:pb-0" key={item.id}>
            {item.element}
          </li>
        ))}
      </ul>
    </nav>
  );
}
