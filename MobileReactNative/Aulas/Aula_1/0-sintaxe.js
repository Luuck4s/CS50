const nome = "Lucas";
const sobrenome = "Lima";

const valor = 42;

const array = [
  "string",
  43,
  function() {
    console.log("Olá");
  }
];

array[2]();

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
