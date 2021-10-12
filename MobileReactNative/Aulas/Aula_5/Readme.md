#  Listas, Entrada de dados

## Listas 

Na web as listas são criadas de maneiras automáticas, assim que o conteúdo passa do limite da área visível o navegador colocar o scroll, no aplicativo mobile isto é diferente precisamos colocar de maneira manual este recurso através de alguns componentes específicos

- [ScrollView](#ScrollView)
- [FlatList](#FlatList)

### ScrollView

É uma maneira mais básica de se adicionar a  rolagem, se resume em uma View com a habilidade de rolagem, assim que o conteúdo passa do limite da tela ele cria a rolagem. 
**ScrollView irá carregar por padrão todos os items antes de mostrar algo em tela.** 

```jsx
	const contatos = [
	{id: 1, nome:'Lucas',telefone: '111-1111-111' },
	{id: 2, nome:'Sergio',telefone: '132-1324-121'},
	{id: 3, nome:'Gabriel',telefone: '121-1231-111'},
	{id: 4, nome:'Julianne',telefone: '112-1132-111'}
	];
	
	/**
	* Estamos renderizando em tela uma lista de contatos com nomes e 
	* números, utilizamos o map para percorrer e retornar uma view com 
	* cada informações do contato.
	*/
	
	/**
	* O id passado como key para View é muito importante para o 
	* React entender e diferenciar cada item, isto ajuda a ele ser
	* performático.
	*/
	...
	<ScrollView>
		{contatos.map(contato => (
			<View key={contato.id}>
				<Text>{contato.nome}</Text>
				<Text>{contato.telefone}</Text>
			</View>
		))}

	</ScrollView>
	...
```

### FlatList

FlatList é muito similar a ScrollView porem é uma maneira mais performática de  renderizar seus items em tela já que ela renderiza primeiro apenas os item que serão exibidos em tela ou seja que estão no campo de visão, após isso ela renderiza o resto dos item conforme o usuário for rolando.

```jsx
	const contatos = [
	{id: 1, nome:'Lucas',telefone: '111-1111-111' },
	{id: 2, nome:'Sergio',telefone: '132-1324-121'},
	{id: 3, nome:'Gabriel',telefone: '121-1231-111'},
	{id: 4, nome:'Julianne',telefone: '112-1132-111'}
	];
	
	/**
	* Data é o array de dados que queremos exibir em tela
	* o renderItem é a função que passamos como desejamos exibir
	* as informações em tela
	*/
	...
	<FlatList
		data={contatos}
		renderItem={({ item }) => (
			<View key={item.id}>
				<Text>{item.nome}</Text>
				<Text>{item.telefone}</Text>
			</View>
		)}
	/>
	...
```

## Entradas de dados

[Documentação Text lnput](https://reactnative.dev/docs/textinput.html)

As entradas de dados são separadas por componentes controlados e não controlados, componentes controlados são a que cada vez que o valor mudar o React atualiza o lugar onde o valor está sendo mantido e assim consegue fica monitorando oque está havendo, já os não controlados são os elementos em DOM por exemplo. 

```jsx
import React, {useState} from 'react';
import { TextInput } from 'react-native';

...
	const [nome, setNome] = useState('');
		
	<TextInput value={nome} placeholder="Nome" onChange={nome => setNome(nome)}  />		
...
```