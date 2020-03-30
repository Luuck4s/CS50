/**
 * Exemplo de como funciona uma promisse
 */

const url = "";

/**
 *  fetch é uma interace que busca
 * informações para um url passada como parametro
 */

fetch(url) // then é a continuação
  .then(function(res) {
    return res.json();
  })
  .then(function(json) {
    return {
      data: json.data
    };
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {}); // catch captura qualque erro que ocorrer
