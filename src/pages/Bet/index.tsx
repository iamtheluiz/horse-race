import React, { FormEvent } from "react";
import { useHorse } from "../../contexts/horse";
import { useMoney } from "../../contexts/money";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import HorseItem from "../../components/HorseItem";

import "./styles.css";

const Bet: React.FC = () => {
  const { horses, selectedHorse } = useHorse();
  const { balance, bet, setBet } = useMoney();
  const history = useHistory();

  function handleBetSubmit(event: FormEvent) {
    event.preventDefault();

    if (horses.includes(selectedHorse) && bet > 0.01 && bet <= balance) {
      history.push("/race");
    }
  }

  return (
    <section id="bet">
      <header>
        <Button style={{ backgroundColor: "#cc4242" }} onClick={() => history.push("/")}>Menu</Button>
        <h1>Make Your Bet!</h1>
        <div className="money">
          <div className="icon">$</div>
          <span>{balance.toFixed(2)}</span>
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
        <form onSubmit={handleBetSubmit}>
          <span>$</span>
          <input
            className="input-text"
            type="number"
            min="0.01"
            step="0.01"
            value={bet}
            onChange={event => setBet(Number(event.target.value))}
          />
          <Button style={{ backgroundColor: "#93cc42" }}>Bet!</Button>
        </form>
      </footer>
    </section>
  );
};

export default Bet;
