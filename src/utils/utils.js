export const addClassCards = (cards, className) => {
  cards.forEach(card => card.addClass(className));
}

export const removeClassCards = (cards, className) => {
  cards.forEach(card => card.removeClass(className));
}

export const randomNumber = () => Math.floor(Math.random() * 100);
