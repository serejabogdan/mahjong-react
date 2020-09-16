import React from 'react';
import './App.css';
import {Cards} from './cards/Cards';
import {$} from './dom/Dom';

// function to define two cards
function cardClick() {
  let firstCard = null;
  let secondCard = null;
  
  return function(e) {
      const target = $(e.target);
      if(target.classContains('opened')) {
          return;
      }
  
      if(!firstCard) {
          firstCard = target;
      }
      else if(!secondCard) {
          secondCard = target;
          cardEquals(firstCard, secondCard);
          secondCard = firstCard = null;
      }
      target.addClass('opened');
  }
}

// comparison of two cards
function cardEquals(firstCard, secondCard) {
  if(!firstCard || !secondCard) {
      return;
  }
  if(firstCard.text === secondCard.text) {
      setTimeout(() => {
        firstCard.addClass('hide');
        secondCard.addClass('hide');
      }, 1000);
  } else {
      setTimeout(() => {
        firstCard.removeClass('opened');
        secondCard.removeClass('opened');
      }, 1000);
  }
}

// generation of numbers for cards
function generateIds(amountCards) {
  let numberCards = [];
  for(let i = 0; i < amountCards; i++) {
    numberCards.push(Math.floor(Math.random() * 100));
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
