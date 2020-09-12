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

const tutorialCard = Card("Tutorial");

const tutorial1 = Todo("Click on Todo to expand", "high", "15 Dec");
tutorial1.setNotes("Clicking will present more options such as editing and notes");

const tutorial2 = Todo("Hold and drag to move todos", "med", "26 Apr");
tutorial2.setNotes("Reaarange seamlessly");

const tutorial3 = Todo("Click delete to activate delete mode", "low", "3 Sept");
tutorial3.setNotes("Delete mode will let you decide which todos to remove for good");

const tutorial4 = Todo("Click orange arrow to reveal your deck", "high", "3 Sept");
tutorial4.setNotes("All todos belong to cards and we refer to all your cards as your deck. Use cards to organise your todos");

tutorialCard.addTodo(tutorial1);
tutorialCard.addTodo(tutorial2);
tutorialCard.addTodo(tutorial3);
tutorialCard.addTodo(tutorial4);

Board.addCard(tutorialCard);

const general = Card("General");

const stockTodo1 = Todo("Take a walk", "low", "15 Dec");
stockTodo1.setNotes("Take a brisk walk to maccas and get a big mac whilst smoking a ciggie");

const stockTodo2 = Todo("Beat PB in air punches/min", "med", "26 Apr");
stockTodo2.setNotes("make sure to put on bangers and punch on beat. the quicker the rpm the better");

const stockTodo3 = Todo("Prep soles of feet for strenuous activity", "high", "3 Sept");
stockTodo3.setNotes("i dont even know what this consists of but will try my hardest to prep feet");

general.addTodo(stockTodo1);
general.addTodo(stockTodo2);
general.addTodo(stockTodo3);

Board.addCard(general);

addEventsOnLoad(Board, tutorialCard);
renderCard(tutorialCard);

renderList(tutorialCard);
prompt("made it");


