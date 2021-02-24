import React from "react";
import { useHistory } from "react-router-dom";

const Main: React.FC = () => {
  const history = useHistory();

  function handleNavigateToBet() {
    history.push("/bet");
  }

  return (
    <section id="menu">
      <h1>Horse Race!</h1>
      <span className="subtitle">Are you ready? Make your bets!</span>
      <button
        id="start-game"
        className="button outline"
        onClick={handleNavigateToBet}
      >
        Start!
      </button>
    </section>
  );
};

export default Main;
