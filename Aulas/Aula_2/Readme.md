# JavaScript ES6

ECMAScript é uma especificação do Javascript que define como a linguagem será mantida, funções que serão adicionadas ou retiradas seguindo assim um padrão. 

## Closures 

[Closures](https://github.com/Luuck4s/CS50-Mobile-Development-RN/tree/master/Aulas/Aula_2/0-closure.js)

## **IIFE** (Immediately Invoked Function Expression) 

[IIFe](https://github.com/Luuck4s/CS50-Mobile-Development-RN/tree/master/Aulas/Aula_2/1-iife.js)
É uma função que é executada assim que é definida. 

```javascript
	(function () { 
		console.log("Olá");
	})();
```

## First-Class Functions 

[Mozilla Funcao-First-class](https://developer.mozilla.org/pt-BR/docs/Glossario/Funcao-First-class)
First-Class functions é quando a linguagem trata as funções como variáveis, no JavaScript as funções são criadas antes de qualquer coisa no código. 


## Higher Order Functions 

[hof](https://github.com/Luuck4s/CS50-Mobile-Development-RN/tree/master/Aulas/Aula_2/2-hof.js)


##  Synchronous JavaScript

[async](https://github.com/Luuck4s/CS50-Mobile-Development-RN/tree/master/Aulas/Aula_2/3-async.js)

JavaScript é single-threaded, é uma linguagem síncrona. Mas existe algumas funções que são assíncronas.

## Execution Stack 

[stack](https://github.com/Luuck4s/CS50-Mobile-Development-RN/tree/master/Aulas/Aula_2/4-stack.js)

<p align="center">
	<img src="https://github.com/Luuck4s/CS50-Mobile-Development-RN/tree/master/Aulas/Aula_2/.github/stack.png" alt="Stack" >
</p>


Para execução da **stack** as atividades são passadas em formato de fila, caso seja uma funcionalidade utilizando a **API do browser** como setTimeout a stack joga para API e retira da fila, após o tempo do setTimeout acabar a API joga para a **Function Queue** que através do **event loop** espera até a stack está vazia e joga os processos que estão em fila para a stack executa-los.

```javascript 
	function  escrevaUm(){
		console.log('Um');
	}
	
	function  escrevaDois(){
		console.log('Dois');
	} 
	
	function  escrevaTres(){
		console.log('Três');
	} 

	setTimeout(escrevaUm,1000);
	setTimeout(escrevaDois, 0);
	escrevaTres()
```

<p align="center">
	<img src="https://github.com/Luuck4s/CS50-Mobile-Development-RN/tree/master/Aulas/Aula_2/.github/stack_2.png" alt="Stack 2" >
</p>


## Callbacks 

[Callbacks](https://github.com/Luuck4s/CS50-Mobile-Development-RN/tree/master/Aulas/Aula_2/5-callbacks.js)

Callbacks é uma maneira de controlar o flow com o assincronismo do JavaScript.

## Promises 

 [Mozilla Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)
 
[Promises](https://github.com/Luuck4s/CS50-Mobile-Development-RN/tree/master/Aulas/Aula_2/6-promises.js)
 
Uma Promise é  é um objeto que representa a eventual conclusão ou falha de uma operação assincrona. 


## Async/Await 

[Async/Await](https://github.com/Luuck4s/CS50-Mobile-Development-RN/tree/master/Aulas/Aula_2/7-asyncAwait.js)

Aync/Await é uma maneira de transformar o código JavaScript em assíncrono de uma maneira mais fácil e mais organizada. Para utilizar o Await a função precisa ser async ou seja:

```javascript
async function nomeDaFuncao(){

}
```

## This

[this](https://github.com/Luuck4s/CS50-Mobile-Development-RN/tree/master/Aulas/Aula_2/8-this.js)

No javaScript o `this` utilizado dentro de um objeto referencia o objeto mas se utilizado em um contexto global irá referenciar o objeto global. 


## DOM

A DOM é a árvore de elementos do HTML, como eles são organizados e com isso podemos utilizar o javascript para modificar o HTML.

<p align="center">
	<img src="https://github.com/Luuck4s/CS50-Mobile-Development-RN/tree/master/Aulas/Aula_2/.github/dom.png" alt="DOM" >
</p>