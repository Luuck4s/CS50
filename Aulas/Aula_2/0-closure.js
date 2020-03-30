/**
 * Exemplo de um closure
 */
function darUmOi() {
  const mensagem = "Olá";

  function darOi() {
    console.log(mensagem);
  }

  return darOi();
}

darUmOi();

/**
 * Closure da ultima aula que estava com bug,
 * a função está retornando na posição 0 o valor de 5 e
 * não o valor de i no for.
 */

function fazerUmArray() {
  const arr = [];

  //Uma solução era trocar para let a variável i que estava como var
  for (let i = 0; i < 5; i++) {
    arr.push(function() {
      console.log(i);
    });
  }

  return arr;
}

const arr = fazerUmArray();

arr[0](); // 0
