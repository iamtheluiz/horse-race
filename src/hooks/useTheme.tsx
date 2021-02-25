import { useEffect, useState } from "react";

type Theme = {
  [key: string]: string;
  "--background-color": string;
  "--text-color": string;
}
type ThemeList = {
  [key: string]: Theme;
  light: Theme;
  dark: Theme;
}

export const themes: ThemeList = {
  light: {
    "--background-color": "#FFF",
    "--text-color": "#000"
  },
  dark: {
    "--background-color": "#000",
    "--text-color": "#FFF",
  }
};

interface useThemeProps {
  setSelectedTheme: (arg0: string) => void;
  selectedTheme: string;
}

const useTheme = (): useThemeProps => {
  const [selectedTheme, setSelectedTheme] = useState("light");

  useEffect(() => {
    const storedTheme: string | null = localStorage.getItem("@iamtheluiz-horse-race/theme");

    console.log(storedTheme);

    if (storedTheme && Object.keys(themes).includes(storedTheme)) {
      setSelectedTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    applyTheme(selectedTheme);
    console.log("oi");
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