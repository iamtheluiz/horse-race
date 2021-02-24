import React from "react";
import { useHorse } from "../../contexts/horse";

import Button from "../../components/Button";
import HorseItem from "../../components/HorseItem";

import "./styles.css";

const Bet: React.FC = () => {
  const { horses } = useHorse();

  return (
    <section id="bet">
      <h1>Make Your Bet!</h1>
      <div className="content">
        <div className="horse-list">
          {horses.map(horse => (
            <HorseItem key={horse.name} horse={horse} />
          ))}
        </div>
        <footer>
          <span>R$</span>
          <input className="input-text" type="text" />
          <Button style={{ backgroundColor: "#93cc42" }}>Bet!</Button>
        </footer>
      </div>
    </section>
  );
};

export default Bet;
