import imgRecycle from '../images/recycle.png';
import addMore from '../images/close-icon.png';

const WrapContainer = () => {
  document.body.innerHTML = `<div class="container">
   <h3>Today's to do
   <img src=${imgRecycle} id="imgRecycle" alt=""/></h3>
   <div class="input-add-new-wrapp">
    <label for='inputD'>
      <img src=${addMore} alt="" class="icon-add-new"/> 
    </label>
    <input type="text" placeholder="Create a new task..." id="inputD" name="inputD"/>
   </div>
   <ul id="list"></ul>
   <button class="button_clear" id="btnRemove">Clear all selected</button>
   <p id="error_message"></p>
</div>`;
};

export default WrapContainer;