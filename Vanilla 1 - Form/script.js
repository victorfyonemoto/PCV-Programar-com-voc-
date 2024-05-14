/** 
* Adds two numbers and displays the result in an alert box.
* @param {Event} e - Event object.
*/

function somar(e) {
  
  /** Removes the paragraph with the result of the sum if alredy exists.
  * @constant {function} 
  */

  const remove = () => {
    const p = document.querySelector('p');
    if (p) {
      p.remove();
    }
  };

  remove();

  /** @variable {Number} */
  
  let a = parseFloat(document.querySelector("#primeiro")?.value);

  /** @variable {Number} */

  let b = parseFloat(document.querySelector("#segundo")?.value);

  if ((isNaN(a) || isNaN(b)) || (a === 0 && b === 0)){
    alert("Por favor, insira dois números válidos.");
    return;
  }

  alert(a + b);

  /** @constant {HTMLParagraphElement} */
  
  const p = document.createElement("p");
  p.textContent = `O resultado da soma é ${a + b}`;
  p.style.marginTop='20px';
  document.querySelector('fieldset').appendChild(p);
  e.preventDefault();

}

try {
  document.querySelector("#somar").addEventListener("click", somar)
} catch (err) {
  console.log(err);
}
 
