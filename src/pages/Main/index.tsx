import React from 'react';

const Main: React.FC = () => {
  return (
    <section id="menu">
      <h1>Horse Race!</h1>
      <span className="subtitle">Are you ready? Make your bets!</span>
      <button className="button outline" id="start-game">Start!</button>
    </section>
  );
}

export default Main;
