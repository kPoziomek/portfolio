import { useEffect, useState } from "react";

const isBrowser = typeof window !== "undefined";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(() => ({
    width: isBrowser ? window.innerWidth : 0,
    height: isBrowser ? window.innerHeight : 0,
  }));

  useEffect(() => {
    if (!isBrowser) return;

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};
