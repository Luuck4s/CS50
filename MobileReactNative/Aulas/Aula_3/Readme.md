# React, Props e State

## Classes 

Classes é uma forma de definir objetos complexos com propriedades especificas, criamos a classe para então poder fazer uma instância dela, também utilizamos classes do core do JavaScript:

```javascript
Date  // Classe
		
const d = new Date() // instância 
 ``` 

Classes tem métodos, métodos estáticos e propriedades: 

```javascript
/**
* Método comum precisa de um instacia da classe 
* que aqui é a String 
*/
d.toString() // método 

/**
* Métodos estáticos não precisam de uma instância 
* para poderem funcionar
*/
Date.now()  // método estático
 ```

## Construindo a classe Set

[Class Set](https://github.com/Luuck4s/CS50-Mobile-Development-RN/tree/master/Aulas/Aula_3/0-set.js)


## React 

React é uma biblioteca do javaScript onde escrevemos de maneira declarativa, podemos abstrair problemas complexos separando em componentes.

### Imperativa vs Declarativa  
|Imperativa  | Declarativa |
|--|--|
| Todos os passos que o programa deve seguir | Apenas escrevemos o que queremos |


### Exemplo criando um violão

#### Imperativa 

```javascript 
const notas = ['E', 'A', 'D', 'G', 'B', 'E'];

function violao(){
	//criar o cabeçote e adicionar as taraxas 
	const cabeca = createElement('cabeca');
	for (let i = 0; i < 6; i++){
		const taraxa = createElement('taraxa');
		head.append(taraxa);
	}
	
	// criar o pescoço e as casas 
	const pescoco = createElement('pescoco');
	for (let i = 0; i < 19; i++){
		const casa = createElement('casa');
		pescoco.append(casa);
	}
	
	// criar o corpo e adicionar as notas 
	const corpo = createElemet('corpo');
	notas.forEach(nota => {
		const corda = createElement('corda');
		corda.afinar(nota);
		corpo.append(corda);
	})
	
	return corpo;
}
```

#### Declarativa 

```javascript 
const notas = ['E', 'A', 'D', 'G', 'B', 'E'];

function violao(){
	return (
		<Violao>
			{notas.map(nota => (
				<Corda nota={nota} />		
			))}
		</Violao>
	)
}
```

### Escrevendo em React

- JSX
	- XML - É tipo uma mistura do HTML com o javaScript

	- Tudo que é escrito é transpilado para o javaScript
	- É escrito com tags, sendo as com lowercase tags do HTML e as com uppercase componentes personalizados. 
	
- Componentes são funções
	- Função que retornam algo que o React possa renderizar (`<div />`)

	- Componentes recebem um objeto de propriedades passados pelo elemento 

### Props 	

Props é um objeto passado para o componente que utiliza as informações para retornar algo para ser renderizado por exemplo. Props são passados para os componentes na mesma sintaxe que as propriedades são passadas para os elementos, mudando apenas que os valores são envolvidos por `{}`

```javascript
	...
	<Titulo titulo={"Está é a página incial"} />
	... 
 ```
 
### State

State é o estado interno do componente, e podemos armazenar qualquer informação que quisermos, o state é mantido pelo componente e toda vez que há alguma alteração o componente é renderizado atualizando a informação em tela.  O State não pode ter o valor alterado caso quisermos mudar o valor precisamos utilizar uma função para isso. Abaixo está um exemplo simples de uma aplicação onde cada click aumenta um número exibido em tela.

```javascript
import React from 'react';

export default class Contador extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			contador: 0
		}
	}
	
	aumentarUm(){
		this.setState({contador:  this.state.contador +  1 })
	}

	render(){
		return(
			<div>
				<button  onClick={() => this.aumentarUm()}>Aumentar + 1</button>
				<h2>{this.state.contador}</h2>
			</div>
		)
	}
}
``` 
Antes da implementação dos Hooks só podia ter state componentes com classes, após a implementação podemos criar componentes com state utilizando o hook useState: 

**State utilizando hook** 
```javascript
import React,{useState} from 'react';

export default function Contador(){
/**
* O primeiro valor do array é a variável que irá guardar o valor do 
* state, o segundo é a função que será utilizada para alterar o valor,
* no final passamos dentro do parâmetro qual valor incial deste estado
* que no caso foi 0 já que estaremos trabalhando com números. 
*/
	const [contador, setContador] = useState(0); 
	
	const aumentarUm = () => {
		setContador(contador + 1)
	}
	
	return(
		<div>
			<button  onClick={() => aumentarUm()}>Aumentar + 1</button>
			<h2>{contador}</h2>
		</div>
	)
}
``` 

