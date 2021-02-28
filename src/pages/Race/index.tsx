import React from "react";

import fanceImage from "../../assets/fance.png";
import { useHorse } from "../../contexts/horse";

import "./styles.css";

const Race: React.FC = () => {
  const { horses } = useHorse();

  return (
    <section id="race">
      <div className="sky"></div>
      <div className="ground">
        <div className="fance" style={{ backgroundImage: `url(${fanceImage})` }}></div>
        <div className="racecourse">
          <div className="tracks">
            {horses.map(horse => (
              <div key={horse.name} className="track"></div>
            ))}
          </div>
          <div className="horses">
            {horses.map(horse => (
              <div key={horse.name} className="horse-item">
                <img src="/img/horse.gif" alt="Horse Gif" />
              </div>
            ))}
          </div>
          <div className="fance" style={{ backgroundImage: `url(${fanceImage})` }}></div>
        </div>
      </div>
    </section>
  );
};

export default Race;