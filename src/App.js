import React from 'react';
import './App.css';
import { Cards } from './cards/Cards';
import { $ } from './utils/dom/Dom';
import { addClassCards, removeClassCards, randomNumber } from './utils/utils';

function cardClick() {
  let cards = [];
  return function (e) {
    if(!areCardsEnough(cards)) {
      let target = $(e.target);
      cards.push(target);
      target.addClass('opened');
    } else {
      cardsComparison(cards);
      cards = [];
    }
  }
}

function areCardsEnough(cards) {
  return cards.length < 2;
}

// comparison of two cards
function cardsComparison(cards) {
  const [firstCard, secondCard] = cards;
  const areCardsExists = !areCardsEnough(cards);
  if (areCardsExists) {
    return;
  }
  const areCardsEqual = firstCard.text === secondCard.text;
  if (areCardsEqual) {
    cardsHide(cards);
  } else {
    cardsClosing(cards);
  }
}

function cardsHide(cards) {
  const HIDE_ANIMATION_TIME = 1000;
  setTimeout(() => {
    addClassCards(cards, 'hide');
  }, HIDE_ANIMATION_TIME);
}

function cardsClosing(cards) {
  const CLOSE_ANIMATION_TIME = 1000;
  const ANIMATION_WAITING = 1600;
  setTimeout(() => {
    removeClassCards(cards, 'opened');
    addClassCards(cards, 'wait');
  }, CLOSE_ANIMATION_TIME);
  setTimeout(() => {
    removeClassCards(cards, 'wait');
  }, ANIMATION_WAITING);
}

// generation of numbers for cards
function generateIds(amountCards) {
  let numberCards = [];
  for (let i = 0; i < amountCards; i++) {
    numberCards.push(randomNumber());
  }
  return numberCards;
}

function App() {
  const ids = generateIds(15);
  const onCardClick = cardClick();
  return (
    <div className="wrapper">
      <Cards ids={ids} onCardClick={onCardClick} />
      <Cards ids={ids} onCardClick={onCardClick} isSort={true} />
    </div>
  );
}

export default App;
