import { cartItems, renderCart } from "./cart";

export function addItem() {

  const itemElement = document.querySelector('#name');

  const priceElement = document.querySelector('#price');

  const quantityElement = document.querySelector('#quantity');

  const name = itemElement.value.trim();

  const price = parseFloat(priceElement.value);

  const quantity = parseInt(quantityElement.value);

  if(isNaN(price) || isNaN(quantity) || name === '' || price <= 0 || quantity <= 0) {
    alert('Please, fill all the fields correctly!')
    return;
  }

  cartItems.push({ name, price, quantity });

  itemElement.value = '';

  priceElement.value = '';

  quantityElement.value = '';

  renderCart();

}