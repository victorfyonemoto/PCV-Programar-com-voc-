/** 
* Checks if the user is of legal age
* @param {Event} e - Event object.
*/

function verificarIdade(e) {

  /** Removes the paragraph element.
  * @constant {function}
  */

  const remove = () => {
    const p = document.querySelector('p');
    if (p) {
      p.remove();
    }
  }

  remove();

  /** @variable {Number} */
  
  let idade = Number(document.querySelector("#idade")?.value);

  /** @constant {HTMLParagraphElement} */
  
  const p =  document.createElement("p");

  if (idade < 18) {
    alert("Você não tem idade para acessar o conteúdo");
    p.textContent = `O usuário tem ${idade} anos de idade, portanto não tem idade para acessar o conteúdo.`;
    p.style.marginTop='10px';
    p.style.textAlign='center';
    p.style.lineHeight='1.5';
    document.querySelector('fieldset')?.appendChild(p);
  } else {
    alert("Você tem idade para acessar o conteúdo");
    p.textContent = `O usuário tem ${idade} anos de idade, portanto tem idade para acessar o conteúdo.`;
    p.style.marginTop='10px';
    p.style.textAlign='center';
    p.style.lineHeight='1.5';
    document.querySelector('fieldset')?.appendChild(p);
  }

  e.preventDefault();

}

try {
  document.querySelector("#verificar")?.addEventListener("click", verificarIdade);
} catch (err) {
  console.log(err);
}