import 'jest-localstorage-mock';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const dom = new JSDOM(`
<!DOCTYPE html>
<p>Hello world</p>`);
const { document } = (new JSDOM('...')).window;

const checkItem = localStorage.getItem('TaskToday');
let toDoList = [];

class UserTask {
  constructor(title1, author1, id1) {
    this.description = title1;
    this.completed = author1;
    this.index = id1;
  }

  add() {
    if (this.title1 === '') {
      return -1;
    } if (!checkItem) {
      toDoList.push(this);
      localStorage.setItem('TaskToday', JSON.stringify(toDoList));
      const testing = JSON.parse(localStorage.getItem('TaskToday'));
      document.body.innerHTML
      += `<div > 
        <span id="username" /> 
        <img id="imtrash${testing.length}"
        <button class="imgRemove" /> 
        <input type="checkbox" class="check" />
      </div>`;
      return testing.length;
      // location.reload();
    }
    const ArrayStored = localStorage.getItem('TaskToday');
    const ArrayStoredParse = JSON.parse(ArrayStored);
    ArrayStoredParse.push(this);
    localStorage.setItem('TaskToday', JSON.stringify(ArrayStoredParse));
    toDoList = JSON.parse(ArrayStored);
    const testing = JSON.parse(localStorage.getItem('TaskToday'));
    console.log(localStorage);
    return testing.length;
    // location.reload();
  }

  updateStore(description, id) {
    const ArrayStored = localStorage.getItem('TaskToday');
    const ArrayStoredParse = JSON.parse(ArrayStored);
    const a = this;
    if (ArrayStoredParse.length === 0 || ArrayStoredParse.length < id) {
      return -1;
    }
    ArrayStoredParse.forEach((a, i) => {
      ArrayStoredParse[id].description = description;
      localStorage.setItem('TaskToday', JSON.stringify(ArrayStoredParse));
    });
    return JSON.parse(localStorage.getItem('TaskToday'))[id].description;
  }

  updateId() {
    const b = this;
    const TasksR = JSON.parse(localStorage.getItem('TaskToday'));
    TasksR.forEach((a, i) => {
      a.index = i;
      localStorage.setItem('TaskToday', JSON.stringify(TasksR));
    });
  }

  removeTask(id) {
    this.updateId();
    const BookStored = JSON.parse(localStorage.getItem('TaskToday'));

    const BookFiltered = BookStored.filter((book, index) => book.index !== id);
    localStorage.setItem('TaskToday', JSON.stringify(BookFiltered));
    const testing = JSON.parse(localStorage.getItem('TaskToday'));
    console.log(testing);
    return testing.length;
  }

  check(id) {
    this.updateId();
    const TasksR = JSON.parse(localStorage.getItem('TaskToday'));
    if (TasksR[id].completed === true) {
      TasksR[id].completed = false;
      localStorage.setItem('TaskToday', JSON.stringify(TasksR));
      console.log(TasksR);
    } else {
      TasksR[id].completed = true;
      localStorage.setItem('TaskToday', JSON.stringify(TasksR));
      console.log(TasksR);
    }
  }

  btnRemoveChecked() {
    this.updateId();
    const TasksR = JSON.parse(localStorage.getItem('TaskToday'));
    const BookFiltered = TasksR.filter((book) => book.completed !== true);
    localStorage.setItem('TaskToday', JSON.stringify(BookFiltered));
    return BookFiltered.length;
  }
}

export default UserTask;
