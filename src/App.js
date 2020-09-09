import React from 'react';
import './App.css';
import {Card} from './card/Card';

function generateIds(amountCards) {
  let numberCards = [];
  for(let i = 0; i < amountCards; i++) {
    numberCards.push(Math.floor(Math.random() * 100));
  }
  return numberCards;
}

let first = null;
let second = null;
let isSecond = false;
function clicked(e) {
  e.target.classList.add('opened');
  if (!isSecond) {
    first = e.target;
    isSecond = !isSecond;
  } else if (isSecond) {
    second = e.target;
    console.log(first === second);
    isSecond = !isSecond;
  }
}

function cards(amountCards) {
  let numberCards = generateIds(amountCards);
  let cards = [];

  Object.assign(cards, numberCards);
  cards.sort();
  numberCards.push(...cards);

  cards = [];

  for(let i = 0; i < numberCards.length; i++) {
    cards.push(<Card back={numberCards[i]} key={i} onclick={clicked} />);
  }

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
