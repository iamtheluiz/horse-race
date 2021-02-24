import React from "react";

import { Horse, useHorse } from "../../contexts/horse";

import "./styles.css";

interface HorseItemProps {
  horse: Horse;
}

const HorseItem: React.FC<HorseItemProps> = ({ horse }) => {
  const { setSelectedHorse, selectedHorse } = useHorse();

  return (
    <div
      className={`horse-item ${horse.name === selectedHorse.name ? "active" : ""}`}
      onClick={() => setSelectedHorse(horse)}
    >
      <img src="/img/horse.gif" alt="Horse Gif" />
      <span>{horse.name}</span>
    </div>
  );
};

export default HorseItem;