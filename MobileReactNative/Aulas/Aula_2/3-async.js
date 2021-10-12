function escrevaUm(){
  console.log('Um');
}

function escrevaDois(){
  console.log('Dois');
}

function escrevaTres(){
  console.log('Três');
}

setTimeout(escrevaUm,1000);
setTimeout(escrevaDois, 0);
escrevaTres()