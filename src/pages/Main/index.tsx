import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import useTheme from "../../hooks/useTheme";

const Main: React.FC = () => {
  const history = useHistory();
  const { selectedTheme, setSelectedTheme } = useTheme();

  function handleNavigateToBet() {
    history.push("/bet");
  }
  function handleToggleTheme() {
    setSelectedTheme(selectedTheme === "light" ? "dark" : "light");
  }

  return (
    <section id="menu">
      <h1>Horse Race!</h1>
      <span className="subtitle">Are you ready? Make your bets!</span>
      <Button id="start-game" onClick={handleNavigateToBet}>Start!</Button>
      <Button id="start-game" style={{ backgroundColor: "var(--theme-button)"}} onClick={handleToggleTheme}>Theme</Button>
    </section>
  );
};

export default Main;
