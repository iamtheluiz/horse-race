import React from "react";
import { HorseProvider } from "./contexts/horse";
import useTheme from "./hooks/useTheme";
import Routes from "./routes";

// Styles
import "./styles/global.css";

const App: React.FC = () => {
  useTheme(); // Start in any page

  return (
    <HorseProvider>
      <Routes />
    </HorseProvider>
  );
};

export default App;
