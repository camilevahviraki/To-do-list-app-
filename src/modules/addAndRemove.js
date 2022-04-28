const checkItem = localStorage.getItem('TaskToday');
let toDoList = [];

class UserTask {
  constructor(title1, author1, id1) {
    this.description = title1;
    this.completed = author1;
    this.index = id1;
  }

  add() {
    if (this.title === '') {
      alert('Fill all inputs');
    } else if (!checkItem) {
      toDoList.push(this);
      localStorage.setItem('TaskToday', JSON.stringify(toDoList));
      console.log(toDoList);
      location.reload();
    } else {
      const ArrayStored = localStorage.getItem('TaskToday');
      const ArrayStoredParse = JSON.parse(ArrayStored);
      ArrayStoredParse.push(this);
      localStorage.setItem('TaskToday', JSON.stringify(ArrayStoredParse));
      toDoList = JSON.parse(ArrayStored);
      location.reload();
      console.log(toDoList);
    }
  }

  updateStore() {
    const ArrayStored = localStorage.getItem('TaskToday');
    const ArrayStoredParse = JSON.parse(ArrayStored);
    const a = this;
    const inputs = document.querySelectorAll('.inputTask');
    inputs.forEach((element, index) => {
      element.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();

          ArrayStoredParse.forEach((a, i) => {
            const listUpdate = document.getElementById(i);
            ArrayStoredParse[i].description = listUpdate.value;
            localStorage.setItem('TaskToday', JSON.stringify(ArrayStoredParse));
            location.reload();
          });
        }
      });
    });
  }

  updateId() {
    const b = this;
    const TasksR = JSON.parse(localStorage.getItem('TaskToday'));
    TasksR.forEach((a, i) => {
      a.index = i;
      localStorage.setItem('TaskToday', JSON.stringify(TasksR));
    });
  }

  removeTask() {
    const removeList = document.querySelectorAll('.imgRemove');
    const BookStored = JSON.parse(localStorage.getItem('TaskToday'));
    removeList.forEach((a, i) => {
      document.getElementById(`imtrash${i}`).addEventListener('click', () => {
        const BookFiltered = BookStored.filter((book, index) => book.index !== i);
        localStorage.setItem('TaskToday', JSON.stringify(BookFiltered));
        location.reload();
        this.updateId();
      });
    });
  }
}

export default UserTask;