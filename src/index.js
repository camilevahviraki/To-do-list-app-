import _ from 'lodash';
import './style.css';
import imgDots from './images/dots.png';
import imgRecycle from './images/recycle.png';

document.body.innerHTML = `<div class="container">
   <h3>Today's to do
   <img src=${imgRecycle} id="imgRecycle" alt=""/></h3>
   <input type="text" placeholder="add your list..." id="inputD" draggable="true"/>
   <ul id="list"></ul>
   <button class="button_clear">Clear all selected</button>
</div>`;

// const checkItem = localStorage.getItem('bookArrObj');
const input = document.getElementById('inputD');
const list = document.getElementById('list');
const toDoList = [
  {
    description: 'take a ride',
    completed: false,
    index: '1',
  },
  {
    description: 'go to swiming pool',
    completed: false,
    index: '2',
  },
  {
    description: 'Go to study',
    completed: false,
    index: '3',
  },

];

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const desc = input.value;
    const objectTask = {
      description: `${desc}`,
      completed: false,
      index: `${toDoList.length}`,
    };

    toDoList.push(objectTask);
  }
});

toDoList.forEach((a) => {
  list.innerHTML += `<li draggable="true">
  <input type="checkbox" name="" class="check">
  <p>${a.description}<img class="imgTrash" src=${imgDots} alt=""/></p></li>`;
});
