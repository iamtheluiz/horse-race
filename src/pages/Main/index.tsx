import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";

const Main: React.FC = () => {
  const history = useHistory();

  function handleNavigateToBet() {
    history.push("/bet");
  }

  return (
    <section id="menu">
      <h1>Horse Race!</h1>
      <span className="subtitle">Are you ready? Make your bets!</span>
      <Button id="start-game" onClick={handleNavigateToBet}>Start!</Button>
    </section>
  );
};

export default Main;
