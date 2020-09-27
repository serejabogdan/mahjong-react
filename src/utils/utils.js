export const isCardFree = target => target.classContains('opened') || target.classContains('wait');

export const addClass = (firstCard, secondCard, className) => {
  firstCard.addClass(className);
  secondCard.addClass(className);
}

export const removeClass = (firstCard, secondCard, className) => {
  firstCard.removeClass(className);
  secondCard.removeClass(className);
}
