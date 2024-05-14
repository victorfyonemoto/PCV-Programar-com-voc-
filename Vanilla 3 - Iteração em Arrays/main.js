const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const double = arr.map((num) => {
  return num * 2
});

/* const numeros = document.querySelector('.numeros');

const dobro = document.querySelector('.dobro');

numeros.innerHTML = `Array original: ${arr.join(', ')}`;

dobro.innerHTML = `Array dobro: ${double.join(', ')}`; */

const arrays = document.querySelectorAll('.arrays');

for (let i = 0; i < arrays.length; i++) {
  if(arrays[i].classList.contains('dobro')){
    arrays[i].innerHTML = `Array dobro: ${double.join(', ')}`;
  } else{
    arrays[i].innerHTML = `Array original: ${arr.join(', ')}`;
  }
}

/* for(let arr in arrays){
  if(arrays[arr].classList.contains('dobro')){
    arrays[arr].style.backgroundColor = 'red';
  } else{
    arrays[arr].style.backgroundColor = 'blue';
  }
} */

/* for(let arr of arrays){
  if(arr.classList.contains('dobro')){
    arr.style.backgroundColor = 'red';
  } else{
    arr.style.backgroundColor = 'blue';
  }
} */
