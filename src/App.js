import React from 'react';
import './App.css';
import {Card} from './card/Card';

function generateId() {
  return Math.floor(Math.random() * 100);
}

function cards(amountCards) {
  let cards = [];

  for(let i = 0; i < amountCards; i++) {
    cards.push(<Card back={generateId()} key={i}/>);
  }

  // for(let i = 0; i < amountCards; i++) {
  //   cards.push(<Card back={generateId()} key={i}/>);
  // }

  cards.push(...cards);

  return cards;
}

function App() {
  return (
    <div className="wrapper">
      {cards(15)}
    </div>
  );
}

export default App;
