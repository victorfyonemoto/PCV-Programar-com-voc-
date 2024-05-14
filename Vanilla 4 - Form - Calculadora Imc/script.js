/**
* Calculates the BMI of a person.
* @param {Event} e - Event object.
*/

/* const calcular = (e) => {

  console.clear();

  console.log("Clique no botão calcular");

  let weigth = parseFloat(document.querySelector('#weigth')?.value);
  
  let heigth = parseFloat(document.querySelector('#heigth')?.value);

  if(!isNaN(weigth) || !isNaN(heigth) && heigth !== 0 && weigth !== 0) {

    let bmi = weigth / (heigth * heigth);

    let result;

    if (bmi < 18.5) {

      result = 'abaixo do peso';

    } else if (bmi < 24.9) {

      result = 'peso normal';

    } else if (bmi < 29.9) {

      result = 'sobrepeso';

    } else if (bmi < 34.9) {

      result = 'obesidade grau 1';

    } else if (bmi < 39.9) {

      result = 'obesidade grau 2';

    } else {

      result = 'obesidade grau 3';
      
    }

    let divResultado = document.querySelector('#result');

    if (divResultado) {
      divResultado.textContent = `Seu Imc é de ${imc.toFixed(2)}, portanto você está com ${result}`;
    }

  } else {

    alert('Preencha os campos corretamente');

  }

  e.preventDefault();

};

try {
  document.querySelector("#calcular")?.addEventListener("click", calcular);
} catch (err) {
  console.log(err);
} */

// REFATORADO

/** @constant {Array} bodyMassIndex - Array with the values of the BMI and their respective classification. */

const bodyMassIndex = [
  { value: 18.5, message: "abaixo do peso" },
  { value: 24.9, message: "peso normal" },
  { value: 29.9, message: "sobrepeso" },
  { value: 34.9, message: "obesidade grau 1" },
  { value: 39.9, message: "obesidade grau 2" },
  { value: Infinity, message: "obesidade grau 3" }
];

/**
* Calculates the BMI of a person.
* @param {Event} e - Event object.
*/

function calculateBMI(e) {

  console.clear();

  console.log("Clique no botão calcular");

  let weight = parseFloat(document.querySelector("#weight")?.value);

  let height = parseFloat(document.querySelector("#height")?.value);

  if ((isNaN(weight) || isNaN(height)) || (height === 0 || weight === 0)) {
    alert("Preencha os campos corretamente");

    return;
  }

  console.log('Calculando IMC...');

  let bmi = (weight / (height * height)).toFixed(2);

  let result = bodyMassIndex.find((item) => parseFloat(bmi) < item.value)?.message || "classificação não encontrada";

  let divResultado = document.querySelector("#result");

  if (divResultado) {
    divResultado.textContent = `Seu Imc é de ${bmi}, portanto você está com ${result}`;
    console.log(`IMC = ${bmi} \n${result}`);
  }

  e.preventDefault();
};

try {
  document.querySelector("#calcular")?.addEventListener("click", calculateBMI);
} catch (err) {
  console.log(err);
}
