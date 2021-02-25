export type Theme = {
  [key: string]: string;
  "--background-color": string;
  "--text-color": string;
}
export type ThemeList = {
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