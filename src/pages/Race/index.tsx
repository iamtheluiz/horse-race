import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { betReward } from "../../config/betReward";

import { Horse, useHorse } from "../../contexts/horse";
import { useDialog } from "../../contexts/dialog";
import { useMoney } from "../../contexts/money";

import fenceImage from "../../assets/fence.png";

import "./styles.css";

const Race: React.FC = () => {
  const [winner, setWinner] = useState({} as Horse);
  const { horses, setHorses, selectedHorse } = useHorse();
  const { bet, balance, setBalance } = useMoney();
  const dialog = useDialog();

  const history = useHistory();

  useEffect(() => {
    resetGame();
    startGame();
  }, []);

  useEffect(() => {
    if (winner.name){
      endGame();
    }
  }, [winner]);

  function resetGame() {
    // Copy horse list
    const horseList = [...horses];

    for(let i = 0; i < horseList.length; i++) {
      // Reset horse position
      horseList[i].position = 0;
    }

    setHorses(horseList);
  }

  function startGame() {
    // Game Loop
    const gameLoopInterval = setInterval(() => {
      const horseList = [...horses];  // Copy horse list

      // Loop thought horses
      for(let i = 0; i < horseList.length; i++) {
        // Add a radom percentage from 0 to 1 to the horse position
        horseList[i].position += Math.random();

        // If the horse reach the end
        if (horseList[i].position >= 100) {
          setWinner(horseList[i]);
          clearInterval(gameLoopInterval);  // End race
          break;
        }
      }

      setHorses(horseList);
    }, 50);
  }

  function endGame() {
    // Order horses by position
    const podium = [...horses].sort((a, b) => {
      if (a.position < b.position) 
        return 1;
      if (a.position > b.position) 
        return -1;
      return 0;
    });

    const selectedHorsePosition = podium.indexOf(selectedHorse) + 1;
    const prize = bet * 4 * betReward[selectedHorsePosition];
    setBalance(balance + prize - bet);

    dialog.setDialog({
      title: `${winner.name} wins!`,
      message: prize === 0 ? `You lost $ ${bet}` : `You won $ ${prize}`,
      type: "success"
    });

    history.push("/bet");
  }

  return (
    <section id="race">
      <div className="sky"></div>
      <div className="ground">
        <div className="fance" style={{ backgroundImage: `url(${fenceImage})` }}></div>
        <div className="racecourse">
          <div className="tracks">
            {horses.map(horse => (
              <div key={horse.name} className="track"></div>
            ))}
          </div>
          <div className="horses">
            {horses.map(horse => (
              <div key={horse.name} className="horse-item" style={{ marginLeft: `${horse.position}%` }}>
                <img src="/img/horse.gif" alt="Horse Gif" />
              </div>
            ))}
          </div>
          <div className="fance" style={{ backgroundImage: `url(${fenceImage})` }}></div>
        </div>
      </div>
    </section>
  );
};

export default Race;