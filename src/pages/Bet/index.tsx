import React, { FormEvent } from "react";
import { useHorse } from "../../contexts/horse";
import { useMoney } from "../../contexts/money";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import HorseItem from "../../components/HorseItem";

import "./styles.css";
import { useDialog } from "../../contexts/dialog";

const Bet: React.FC = () => {
  const { horses, selectedHorse } = useHorse();
  const { balance, bet, setBet } = useMoney();
  const { setDialog } = useDialog();
  const history = useHistory();

  function handleBetSubmit(event: FormEvent) {
    event.preventDefault();

    if (!horses.includes(selectedHorse)) {
      setDialog({
        title: "Missing selected horse",
        message: "(☞ﾟヮﾟ)☞ You need to select a horse to submit a bet!",
        type: "warning"
      });
      return;
    }

    if (bet < 0.01) {
      setDialog({
        title: "Bet not allowed",
        message: "You can't use a value lower than $0.01 in a bet!",
        type: "warning"
      });
      return;
    }

    if (bet > balance) {
      setDialog({
        title: "Bet greater than balance",
        message: "You can't bet more than you have! Take money in the bank (・_・;)",
        type: "warning"
      });
      return;
    }

    history.push("/race");
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
