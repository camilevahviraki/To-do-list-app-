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
    return this.taskToday.length;
  }

  removeTask() {
    const recycle = document.getElementById('imgRecycle');
    recycle.addEventListener('click', () => {
      this.taskToday = [];
      localStorage.setItem('TaskToday', JSON.stringify(this.taskToday));
      this.refresh();
      return this.taskToday.length;
    });

    const removeList = document.querySelectorAll('.imgRemove');
    removeList.forEach((button, i) => {
      button.addEventListener('click', () => {
        this.taskToday = this.taskToday.filter((task) => task.id !== i);
        localStorage.setItem('TaskToday', JSON.stringify(this.taskToday));
        this.updateId();
        this.refresh();
        return this.taskToday.length;
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
    return this.taskToday.length;
  }

  updateId() {
    this.taskToday.forEach((task, i) => {
      task.id = i;
      localStorage.setItem('TaskToday', JSON.stringify(this.taskToday));
    });
  }

  refresh() {
    this.removeTask();
    this.updateStore();
  }
}

export default UpdateList;
