#  Entrada de dados, Debugging

## Lidando com muitos inputs 

- Na web temos o `<form>` porem no React Native não existe 
- Todos os dados dos inputs ficam armazenados e mantidos em um objeto  
- Nós podemos fazer uma função que lide com o envio dos dados 

```jsx
import React, {useState} from  'react';
import { TextInput } from  'react-native';

	...
	const [nome, setNome] =  useState('');
	
	const enviarDados = () => {
		// Fazer o tratamento e envio de dados
	}

	<TextInput  value={nome}  placeholder="Nome"  onChange={nome  =>  setNome(nome)} />
	<Button title="Enviar" onPress={enviarDados} />
	...
```

### KeyboardAvoidingView 


[Dcoumentação KeyboardAvoidingView](https://reactnative.dev/docs/keyboardavoidingview)

É um componente nativo que lida com o teclado e evita que ele fique por cima de componentes na tela. 

##  Debugging 

[Documentação Debugging](https://reactnative.dev/docs/debugging)

Podemos realizar o debug em nossa aplicação de algumas maneira:

- **React Erros / Warnings** 
	- Erros que aparecem na tela inteira, por exemplo quando erramos a sintaxe de alguma coisa. 

	- Warnings não é necessariamente um erro mas sim um aviso que o React Native nos da para concertar ou melhorar alguma parte do nosso código. **Warnings não aparecem em modo de produção.**

- **Chrome Developer Tools** 	
	- Podemos utilizar o Google para realizar o debug do nosso app e para isso podemos dentro da nossa aplicação React Native sacudir o celular ou apertar `CTRL  + M` caso esteja em um emulador e ativar a opção `Debug Remote JS` 

- **React Native Inspector** 
	- Podemos inspecionar os elementos em tela sua estilização e etc, para ativar sacudirmos o celular ou  `CTRL  + M` e ativar o `Show Elemeent Inspector`