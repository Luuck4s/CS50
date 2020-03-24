# Visão Geral, JavaScript

JavaScript é uma linguagem **interpretada**, executada linha por linha, o responsável para isso acontecer é o navegador.  

## Sintaxe 

[Sintaxe](https://github.com/Luuck4s/CS50-Mobile-Development-RN/blob/master/Aulas/Aula_1/0-sintaxe.js)

## Tipos
	
[Tipos](https://github.com/Luuck4s/CS50-Mobile-Development-RN/blob/master/Aulas/Aula_1/1-tipos.js)

O javaScript tem uma tipagem dinâmica, não é necessário declarar o tipo da variável pois isto é definido automaticamente em tempo de execução. 

### Tipos Primitivos 

- undefined
- null
- boolean
- number
- string
- (symbol)

Tudo no javaScript é object. 

### Como definir um tipo ? 

> Maneira explicita

```javascript
	const x = 42;
	const explicita = String(x);
	
	explicita === "42"
```
> Maneira implícita

```javascript
	const x = 42;
	const implicita = x + "";
	
	implicita === "42"
```

### Comparar 

```javascript
	== compara apenas os valores, discartando os tipos  
```

```javascript
	=== compara os valores e tipos, necessita que seja os mesmos 
```

### Sobre valores transformados em boolean 

#### Valores que são "falsificado" 

> Valores que ao serem transformados em boolean retornam falso 

- undefiend
- null
- false
- 0, NaN
- ""
#### Valores que são "verdadeiros" 

> Valores que ao serem transformados em boolean retornam true 

- {}
- []
- +0, -0 
- Qualquer outro valor


### Valores Primitivos vs Objects 

- Valores primitivos são **imutáveis**
	- Quando deseja mudar o valor é criado um novo tipo primitivo e é colocado no lugar com o valor alterado. 

- Objects são mutáveis e é guardado pela referência
	- Quando passado a referência é passado o valor junto.

### Objects

[Objects](https://github.com/Luuck4s/CS50-Mobile-Development-RN/blob/master/Aulas/Aula_1/2-objects.js)


### Diferença entre const, let e var

- **const**  não podem ser alterado
	```javascript 
		const a = 50;
		
		a = 51; // error
		a++; //error
	
		// Mas caso for um objeto 
		
		const obj = {};
		obj.a = "a";
		console.log(obj); // {a: "a"}
		
		obj = 51; // error
	```
- **let**  podem ser alterados
	```javascript 
		let a = 50;

		a = 51; // o valor de a foi alterado 
		a++;
		
		let a = 42; // error, a let á ja foi declarada   
	```
	 **var**  é a maneira antiga de se declarar variáveis no JS
	```javascript 
		var a = 50;

		a = 51; // o valor de a foi alterado 
		a++;
		
		var a = 42; // o valor de a agora é 42
		/* Isso acima funciona por que o var não tem um proteção 
		* que verfica se a variavel já foi declarada 
		*/
	```

### Escopo 

[Escopo](https://github.com/Luuck4s/CS50-Mobile-Development-RN/blob/master/Aulas/Aula_1/4-escopo.js)

- Escopo é o tempo de vida das variáveis. 
	- lexical scoping (**var**): Existe desde o começo da função/arquivo e fica ate o final.
	variáveis
	- block scoping (**const, let**): Existe até o próximo "}".

### Como o JavaScript funciona 

Antes de executar o código o javaScript lê e verificar qualquer erro de sintaxe, com isso qualquer **função já é automaticamente declarada e inicializada**, as **var são apenas declaradas** e **let/const** é  apenas **declarado e inicializado no seu bloco de código**.  

### Objeto Global

O objeto global do JavaScript no navegador é o `window` onde fica declarado todas as funções e variáveis, no node é o `global`.

### Closures

[Closure](https://github.com/Luuck4s/CS50-Mobile-Development-RN/blob/master/Aulas/Aula_1/5-closure.js)

Closures são funções declaras dentro de funções com acesso a todas as variáveis de sua função pai, isto é possível por conta do  escopo. 
