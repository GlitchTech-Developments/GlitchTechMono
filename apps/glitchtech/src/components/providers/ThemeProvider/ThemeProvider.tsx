/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from "react";
import { ThemeToggleDarkIcon, ThemeToggleLightIcon } from "./Icons";

const ThemeContext = React.createContext<any>({});

export function useTheme() {
  return useContext(ThemeContext);
}

const ThemeProvider = (props: any) => {
  const [DarkModeEnabled, setDarkModeEnabled] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "dark") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        setDarkModeEnabled(true);
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        setDarkModeEnabled(false);
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("light")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        setDarkModeEnabled(false);
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        setDarkModeEnabled(true);
      }
    }
  }, []);

  const ThemeToggle = () => {
    setDarkModeEnabled(!DarkModeEnabled);
    if (DarkModeEnabled == true) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  };

  const ThemeToggleButton = () => {
    return (
      <>
        <button
          id="theme-toggle"
          type="button"
          className="rounded-lg bg-black p-2 text-sm text-white dark:bg-gray-800"
          onClick={ThemeToggle}
        >
          {DarkModeEnabled ? <ThemeToggleDarkIcon /> : <ThemeToggleLightIcon />}
        </button>
      </>
    );
  };

  const value = {
    ThemeToggleButton,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div className="dark:bg-black">{props.children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
