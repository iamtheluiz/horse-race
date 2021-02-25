import React from "react";
import { useHorse } from "../../contexts/horse";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import HorseItem from "../../components/HorseItem";

import "./styles.css";

const Bet: React.FC = () => {
  const { horses } = useHorse();
  const history = useHistory();

  return (
    <section id="bet">
      <header>
        <Button style={{ backgroundColor: "#cc4242" }} onClick={() => history.push("/")}>Menu</Button>
        <h1>Make Your Bet!</h1>
        <div className="money">
          <div className="icon">$</div>
          <span>3.00</span>
        </div>
      </header>
      <div className="content">
        <div className="horse-list">
          {horses.map(horse => (
            <HorseItem key={horse.name} horse={horse} />
          ))}
        </div>
      </div>
      <footer>
        <span>$</span>
        <input className="input-text" type="number" />
        <Button style={{ backgroundColor: "#93cc42" }}>Bet!</Button>
      </footer>
    </section>
  );
};

export default Bet;
