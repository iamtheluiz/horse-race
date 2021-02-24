import React from "react";
import { HorseProvider } from "./contexts/horse";
import Routes from "./routes";

// Styles
import "./styles/global.css";

const App: React.FC = () => {
  return (
    <HorseProvider>
      <Routes />
    </HorseProvider>
  );
};

export default App;
