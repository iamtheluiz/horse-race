import { useEffect, useState } from "react";
import { themes } from "../config/themes";

interface useThemeProps {
  setSelectedTheme: (arg0: string) => void;
  selectedTheme: string;
}

const useTheme = (): useThemeProps => {
  const [selectedTheme, setSelectedTheme] = useState("light");

  useEffect(() => {
    const storedTheme: string | null = localStorage.getItem("@iamtheluiz-horse-race/theme");

    if (storedTheme && Object.keys(themes).includes(storedTheme)) {
      setSelectedTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    applyTheme(selectedTheme);
  }, [selectedTheme]);

  function applyTheme(themeKey: string) {
    const theme = themes[themeKey];
    localStorage.setItem("@iamtheluiz-horse-race/theme", themeKey);

    Object.keys(theme).forEach((key: string) => {
      const value = theme[key];
      document.documentElement.style.setProperty(key, value);
    });
  }

  return {
    setSelectedTheme,
    selectedTheme
  };
};

export default useTheme;