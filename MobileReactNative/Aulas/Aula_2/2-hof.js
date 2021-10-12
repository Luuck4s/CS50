function map(arr, fn) {
  const novoArr = [];

  arr.forEach(val => {
    novoArr.push(fn(val));
  });

  return novoArr;
}

function adicionarUm(num) {
  return num + 1;
}

const x = [0, 1, 2, 3];

console.log(map(x, adicionarUm));


function filter(arr, fn) {
  const novoArr = [];

  arr.forEach(val => {
    if(fn(val)){
      novoArr.push(val);
    }
    
  });

  return novoArr;
}

function maiorQueDois(num){
  return num > 2
}

console.log(filter(x, maiorQueDois))