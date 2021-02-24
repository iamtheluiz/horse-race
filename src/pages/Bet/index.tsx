import React from "react";
import HorseItem from "../../components/HorseItem";
import { useHorse } from "../../contexts/horse";

import "./styles.css";

const Bet: React.FC = () => {
  const { horses } = useHorse();

  return (
    <section id="bet">
      <h1>Make Your Bet!</h1>
      <div className="content">
        <div className="horses">
          {horses.map(horse => (
            <HorseItem key={horse.name} horse={horse} />
          ))}
        </div>
        <footer>
          <span>R$</span>
          <input className="input-text" type="text" />
          <button className="button" style={{ backgroundColor: "#93cc42" }}>Bet!</button>
        </footer>
      </div>
    </section>
  );
};

export default Bet;
