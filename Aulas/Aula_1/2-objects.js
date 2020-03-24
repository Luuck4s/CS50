/**
 * Algunas maneiras de criar objetos
 */

const o = new Object();
o.nome = "Lucas";
o.sobrenome = "Lima";
o.estaEmAula = true;
o.comprimentar = function() {
  console.log("Olá!");
};

const o2 = {};
o2.nome = "Lucas";
o2["sobrenome"] = "Lima";
o2["estaEmAula"] = true;
o2["comprimentar"] = function() {
  console.log("Olá!");
};

const o3 = {
  nome: "Lucas",
  sobrenome: "Lima",
  estaEmAula: true,
  comprimentar: function() {
    console.log("Olá!");
  },
  endereco: {
    rua: "Rua tal tal",
    numero: "123"
  }
};

/**
 * Para acessar os valores dentro dos objetos
 */

console.log(o3.nome); // Lucas
console.log(o3["sobrenome"]); // Lima
console.log(o3.endereco); // { rua: 'Rua tal tal', numero: '123' }
console.log(o3.endereco.rua); // Rua tal tal
