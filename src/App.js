import React from 'react';
import './App.css';
import { Cards } from './cards/Cards';
import { $ } from './utils/dom/Dom';
import { addClassCards, removeClassCards, randomNumber } from './utils/utils';

function cardClick() {
  let cards = [];
  return function (e) {
    let target = $(e.target);
    const isCardFree = target.classContains('opened') || target.classContains('wait');
    if(isCardFree) {
      return;
    }

    if(!areCardsEnough(cards)) {
      cards.push(target);
      target.addClass('opened');
    }
    if(areCardsEnough(cards)) {
      cardsAnimation(cards);
      cards = [];
    }
  }
}

function areCardsEnough(cards) {
  return cards.length >= 2;
}

// comparison of two cards
function areCardsEqual(cards) {
  const [firstCard, secondCard] = cards;
  if (!areCardsEnough(cards)) {
    return;
  }
  return firstCard.text === secondCard.text;
}

function cardsAnimation(cards) {
  if (areCardsEqual(cards)) {
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
