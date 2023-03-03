import WrapContainer from './wrapContainer.js';
import imgDots from '../images/dots.png';
import imgTrash from '../images/trash.png';
import checkMark from '../images/check-mark.png';

WrapContainer();
const listContainer = document.getElementById('list');

const displayTasks = (tasksList) => {
  listContainer.innerHTML = '';
  tasksList.forEach((task, i) => {
    listContainer.innerHTML += `
        <li class="listTasks" draggable="true">
          <label class="check-container">
            <input type="checkbox" name="check" class="check">
            <span class="checkmark">
              <img src=${checkMark} alt='' class="checkmark-img"/>
            </span>
          </label>
          <p class="pTask" id="ptask${i}">${task.description}</p>
          <img class="imgTrash" src=${imgDots} id="imdots${i}" alt=""/>
          <input value="${task.description}" type="text" class="inputTask" id=${i} />
          <img class="imgRemove" id="imtrash${i}" src=${imgTrash} alt=""/>
        </li>`;
  });
};

export default displayTasks;