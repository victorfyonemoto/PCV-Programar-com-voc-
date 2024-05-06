export const cartItems = new Array();

export function renderCart(){
  
  if(cartItems.length !== 0){
    document.querySelector('.cart').classList.add('cart__active');
  }
  
  const cartList = document.querySelector('.cart');

  const cartItemsHTML = cartItems.map(item => {
    return `<li>${item.name} - R$ ${item.price} - ${item.quantity}</li>`;
  }).join('');

  cartList.innerHTML = cartItemsHTML;

  const total = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  document.querySelector('.total').innerHTML = `Total: R$ ${total}`;
}

