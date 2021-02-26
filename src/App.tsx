import React from "react";

import useTheme from "./hooks/useTheme";
import Routes from "./routes";
import { ApplicationProvider } from "./contexts";

// Styles
import "./styles/global.css";

const App: React.FC = () => {
  useTheme(); // Start in any page

  return (
    <ApplicationProvider>
      <Routes />
    </ApplicationProvider>
  );
};

export default App;
