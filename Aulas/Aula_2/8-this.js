/**
 * Neste contexto o this esta referenciando o
 * objeto de contexto 
 */

const pessoa = {
  nome: 'Lucas',
  comprimentar: function(){
    console.log('Olá ' + this.nome);
  }
}

pessoa.comprimentar();


const amigo = {
  nome: 'José',
}

amigo.comprimentar = pessoa.comprimentar

amigo.comprimentar(); // Olá José

/**
 * Neste contexto o this está referenciando o
 * objeto global, que não tem a propriedade nome
*/
let comprimentar = pessoa.comprimentar;

comprimentar(); // Olá undefined

/**
 * Uma forma de resolver é definir o this manualmente
 * utlizando o bind, call ou apply 
 */

comprimentar = pessoa.comprimentar.bind({nome: 'João'});
comprimentar();
