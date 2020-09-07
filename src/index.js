import './style.css';
import Todo from './Todo.js';
import Card from './Card.js';
import { renderCard, renderList } from './render.js';
import { addEventsOnLoad } from './events.js';

//board module holding cards
const Board = (() => {
    let cardList = [];

    const getCardList = () => cardList;
    const addCard = (newCard) => {
        if(cardList.length == 0) {
            cardList[0] = newCard;
        } else {
            cardList[cardList.length] = newCard;
        }
    }
    return {getCardList, addCard};
})();

const stockCard = Card("General");
const stockTodo = Todo("Take a walk", "low", "15 Aug");

Board.addCard(stockCard);
stockCard.addTodo(stockTodo);

addEventsOnLoad(stockCard);
renderCard(stockCard);

renderList(stockCard);

