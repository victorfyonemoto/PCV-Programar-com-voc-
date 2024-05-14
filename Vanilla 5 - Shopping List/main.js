import './style.css'
import { addItem } from './addItem'

document.querySelector('#app').innerHTML = `
  <main>
    <h1>Shopping List</h1>
    <div class="container">
      <input type="text" id="name" class="input" placeholder="item" required />
      <input type="text" id="price" class="input" placeholder="price" required />
      <input type="number" id="quantity" class="input" placeholder="quantity" required />
    </div>
    <button type="submit" id="add__item" class="btn">Add Item</button>
    <ul class="cart"></ul>
    <p class="total">Empty Cart</p>
  </main>
`

try {
  document.querySelector('#add__item')?.addEventListener('click', addItem);
} catch (error) {
  console.error(error);
}