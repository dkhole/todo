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
    const removeCard = (card) => {
        let index = cardList.indexOf(card);
        if(index > -1) {
            cardList.splice(index, 1);
        }
    }
    return {getCardList, addCard, removeCard};
})();

const stockCard = Card("General");

const stockTodo1 = Todo("Take a walk", "high", "15 Dec");
stockTodo1.setNotes("Take a brisk walk to maccas and get a big mac whilst smoking a ciggie");

const stockTodo2 = Todo("Beat PB in air punches/min", "med", "26 Apr");
stockTodo2.setNotes("make sure to put on bangers and punch on beat. the quicker the rpm the better");

const stockTodo3 = Todo("Prep soles of feet for strenuous activity", "low", "3 Sept");
stockTodo3.setNotes("i dont even know what this consists of but will try my hardest to prep feet");

stockCard.addTodo(stockTodo1);
stockCard.addTodo(stockTodo2);
stockCard.addTodo(stockTodo3);
Board.addCard(stockCard);


addEventsOnLoad(Board, stockCard);
renderCard(stockCard);

renderList(stockCard);
prompt("made it");


