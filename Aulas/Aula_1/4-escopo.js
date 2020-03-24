// console.log(a);  Error, não pode acessar a const antes de declarar ela
// console.log(b);  Error, não pode acessar a let antes de declarar ela

/**
 *  funciona pois as var's são declaras no começo do arquivo (hoisting) e so são
 * atribuidas o valor quando chega no ponto onde ela realmente foi declarada.
 */
console.log(c); // undefine

hoisted();
// naoHoisted(); Error, não existe funcão declarada com esse nome;
// naoHoisted2(); Error, isto não é uma função

const a = 51;

let b = 51;

var c = 51;


/**
 * hoisted - içada em tradução livre é o ato de uma função ou var serem declarados
 * antes mesmo do seu aparecimento no código, ou seja antes da linha 25 a função hoisted
 * já foi declarada e esta pronta para o uso, mas o naoHoisted é uma const logo o
 * hoisted não funciona, mas na linha 35 tem uma uma var e ela vai ser içada mas
 * vai ser atribuido o valor undefined até chegar nesta parte do código.
 */

function hoisted() {
  console.log("Isto é uma função declarada no final do arquivo");
}

const naoHoisted = function() {
  console.log("Será se eu funciono assim também ? ");
};

var naoHoisted2 = function() {
  console.log("Será se eu funciono assim também ? ");
};
