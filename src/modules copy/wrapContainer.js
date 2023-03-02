import imgRecycle from '../images/recycle.png';

const WrapContainer = () => {
  document.body.innerHTML = `<div class="container">
   <h3>Today's to do
   <img src=${imgRecycle} id="imgRecycle" alt=""/></h3>
   <input type="text" placeholder="add your list..." id="inputD" draggable="true"/>
   <ul id="list"></ul>
   <button class="button_clear" id="btnRemove">Clear all selected</button>
</div>`;
};

export default WrapContainer;