export type Theme = {
  [key: string]: string;
  "--background-color": string;
  "--text-color": string;
  "--theme-button": string;
  "--border-color": string;
}
export type ThemeList = {
  [key: string]: Theme;
  light: Theme;
  dark: Theme;
}

export const themes: ThemeList = {
  light: {
    "--background-color": "#FFF",
    "--text-color": "#000",
    "--theme-button": "#1f1e1a",
    "--border-color": "#000"
  },
  dark: {
    "--background-color": "#000",
    "--text-color": "#FFF",
    "--theme-button": "#f7e435",
    "--border-color": "#404040"
  }
};