class ShowAndHide {
  constructor() {
    this.lists = document.querySelectorAll('.pTask');
    this.imageDots = document.querySelectorAll('.imgTrash');
  }

  static Input = () => {
    this.lists = document.querySelectorAll('.pTask');
    this.lists.forEach((p, i) => {
      p.addEventListener('mouseover', () => {
        document.getElementById(i).style.display = 'flex';
        document.getElementById(`ptask${i}`).style.display = 'none';
      });
      document.getElementById(i).addEventListener('mouseout', () => {
        document.getElementById(i).style.display = 'none';
        document.getElementById(`ptask${i}`).style.display = 'flex';
      });
    });
  }

  static Trash = () => {
    this.imageDots = document.querySelectorAll('.imgTrash');
    this.imageDots.forEach((button, i) => {
      button.addEventListener('mouseover', () => {
        document.getElementById(`imtrash${i}`).style.display = 'flex';
        document.getElementById(`imdots${i}`).style.display = 'none';
      });
      document.getElementById(`imtrash${i}`).addEventListener('mouseout', () => {
        document.getElementById(`imtrash${i}`).style.display = 'none';
        document.getElementById(`imdots${i}`).style.display = 'flex';
      });
    });
  }
}

export default ShowAndHide;
