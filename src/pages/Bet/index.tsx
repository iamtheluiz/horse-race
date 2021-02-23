import React from 'react';

import './styles.css';

const Bet: React.FC = () => {
  return (
    <section id="bet">
      <h1>Make Your Bet!</h1>
      <div className="content">
        <div className="horses">
          <div className="horse">
            <img src="/img/horse.gif" alt="Horse Gif"/>
            <span>Horse 1</span>
          </div>
          <div className="horse">
            <img src="/img/horse.gif" alt="Horse Gif"/>
            <span>Horse 2</span>
          </div>
          <div className="horse">
            <img src="/img/horse.gif" alt="Horse Gif"/>
            <span>Horse 3</span>
          </div>
          <div className="horse">
            <img src="/img/horse.gif" alt="Horse Gif"/>
            <span>Horse 4</span>
          </div>
        </div>
        <footer>
          <span>R$</span>
          <input className="input-text" type="text"/>
          <button className="button" style={{ backgroundColor: '#93cc42' }}>Bet!</button>
        </footer>
      </div>
    </section>
  );
}

export default Bet;
