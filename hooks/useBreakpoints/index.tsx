import React, { useEffect, useState } from "react";
import { breakpoints } from "../../constants";
type Breakpoints = typeof breakpoints;
const getDeviceConfig = (width: number) => {
  if (width < breakpoints["xs"]) {
    return "xs";
  } else if (width >= breakpoints["xs"] && width < breakpoints["sm"]) {
    return "sm";
  } else if (width >= breakpoints["sm"] && width < breakpoints["md"]) {
    return "md";
  } else if (width >= breakpoints["md"] && width < breakpoints["lg"]) {
    return "lg";
  } else if (width >= breakpoints["lg"] && width < breakpoints["xl"]) {
    return "xl";
  } else if (width >= breakpoints["xl"]) {
    return "2xl";
  } else {
    return "2xl";
  }
};

const Index = () => {
  const [currentBreakpoint, setCurrentBreakpoint] =
    useState<keyof Breakpoints>();
  useEffect(() => {
    const calculateBreakpoint = () => {
      setCurrentBreakpoint(getDeviceConfig(window.innerWidth));
    };
    calculateBreakpoint();
    window.addEventListener("resize", calculateBreakpoint);
    return () => window.removeEventListener("resize", calculateBreakpoint);
  }, []);
  const queryBreakpoints = (point: keyof Breakpoints) => {
    const breakpointsArray = Object.keys(breakpoints);
    if (
      breakpointsArray
        .slice(0, breakpointsArray.indexOf(point) + 1)
        .includes(currentBreakpoint!)
    ) {
      return true;
    }
    return false;
  };

  return { currentBreakpoint, queryBreakpoints };
};
export default Index;
