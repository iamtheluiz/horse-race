import React from 'react';
import { useHorse } from '../../contexts/horse';

import './styles.css';

const Bet: React.FC = () => {
  const { horses, selectedHorse, setSelectedHorse } = useHorse()

  return (
    <section id="bet">
      <h1>Make Your Bet!</h1>
      <div className="content">
        <div className="horses">
          {horses.map(horse => (
            <div className={`horse ${selectedHorse.name === horse.name ? 'active' : ''}`} onClick={() => setSelectedHorse(horse)}>
              <img src="/img/horse.gif" alt="Horse Gif" />
              <span>{horse.name}</span>
            </div>
          ))}
        </div>
        <footer>
          <span>R$</span>
          <input className="input-text" type="text" />
          <button className="button" style={{ backgroundColor: '#93cc42' }}>Bet!</button>
        </footer>
      </div>
    </section>
  );
}

export default Bet;
