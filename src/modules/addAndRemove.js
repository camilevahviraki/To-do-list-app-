import displayTasks from './displayTasks.js';
import ShowAndHide from './inputShow.js';
import SteerChecked from './StearChecked.js';

class UpdateList {
  constructor() {
    this.taskToday = JSON.parse(localStorage.getItem('TaskToday'));
    this.message = document.getElementById('error_message');
  }

  computeTask() {
    const input = document.getElementById('inputD');
    input.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        if (this.taskToday) {
          this.add(input.value, false, this.taskToday.length);
        } else {
          this.add(input.value, false, 0);
        }
      }
    });
    this.refresh();
  }

  add(title, completed, index) {
    this.taskToday = JSON.parse(localStorage.getItem('TaskToday'));
    if (title === '') {
      this.message.innerText = 'Please, Add a task before sumit!';
    } else {
      this.message.innerText = '';
      const input = document.getElementById('inputD');
      input.value = '';
      if (this.taskToday) {
        this.taskToday = [...this.taskToday, { description: title, completed, id: index }];
        localStorage.setItem('TaskToday', JSON.stringify(this.taskToday));
      } else {
        this.taskToday = [{ description: title, completed, id: index }];
        localStorage.setItem('TaskToday', JSON.stringify(this.taskToday));
      }
    }
    this.refresh();
  }

  removeTask() {
    const recycle = document.getElementById('imgRecycle');
    recycle.addEventListener('click', () => {
      this.taskToday = [];
      localStorage.setItem('TaskToday', JSON.stringify(this.taskToday));
      this.refresh();
      this.message.innerText = '';
    });

    const removeList = document.querySelectorAll('.imgRemove');
    removeList.forEach((button, i) => {
      button.addEventListener('click', () => {
        this.taskToday = this.taskToday.filter((task) => task.id !== i);
        localStorage.setItem('TaskToday', JSON.stringify(this.taskToday));
        this.updateId();
        this.refresh();
        this.message.innerText = '';
      });
    });

    const buttonRemove = document.getElementById('btnRemove');
    buttonRemove.addEventListener('click', () => {
      this.taskToday = this.taskToday.filter((task) => task.completed !== true);
      localStorage.setItem('TaskToday', JSON.stringify(this.taskToday));
      this.updateId();
      this.refresh();
      this.message.innerText = '';
    });
  }

  setCompleted = () => {
    const checkBoxs = document.querySelectorAll('.check');
    checkBoxs.forEach((check, i) => {
      check.addEventListener('click', () => {
        this.message.innerText = '';
        if (this.taskToday[i].completed === true) {
          this.taskToday[i].completed = false;
          checkBoxs[i].checked = false;
          document.getElementById(`ptask${i}`).style.textDecoration = 'none';
          localStorage.setItem('TaskToday', JSON.stringify(this.taskToday));
        } else {
          this.taskToday[i].completed = true;
          checkBoxs[i].checked = true;
          document.getElementById(`ptask${i}`).style.textDecoration = 'line-through rgb(68, 68, 68)';
          localStorage.setItem('TaskToday', JSON.stringify(this.taskToday));
        }
      });
    });
  }

  updateStore() {
    const inputs = document.querySelectorAll('.inputTask');
    inputs.forEach((element, i) => {
      element.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          this.taskToday[i].description = element.value;
          localStorage.setItem('TaskToday', JSON.stringify(this.taskToday));
          this.refresh();
        }
      });
    });
  }

  updateId() {
    this.taskToday.forEach((task, i) => {
      task.id = i;
      localStorage.setItem('TaskToday', JSON.stringify(this.taskToday));
    });
  }

  refresh() {
    displayTasks(this.taskToday);
    ShowAndHide.Input();
    ShowAndHide.Trash();
    this.removeTask();
    this.updateStore();
    this.setCompleted();
    SteerChecked();
  }
}

export default UpdateList;
