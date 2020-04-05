#  Publicação e Teste

## Publicação

 -  [Expo Documentação Publicação](https://docs.expo.io/versions/latest/workflow/publishing/)

 -  [RN Documentação Publicação](https://reactnative.dev/docs/signed-apk-android)
 
- Publicar o seu app em uma das lojas oficias para cada sistemas. 

- Com o Expo podemos realizar está tarefa de maneira facilitada pois ele já oferece todo o suporte para realizar o "deploy" da aplicação. 

## Teste

- Quando utilizamos o termo "teste" queremos referenciar o teste automatizado

-  Em aplicações muito grandes realizar o teste manual fica muito difícil 

- Adicionando uma suite de teste podemos ter a maior probabilidade de encontrar mais bug 


### Teste  "Pyramid"

- Metodologia para determinar a escala de teste 

- Teste unitário
	- Testa uma funcionalidade/class/método  de maneira unitária
	
- Teste de integração 
	- Testa a integração de diversas partes do nosso código trabalhando juntas

- UI/ Teste de ponta a ponta
	- Testa uma funcionalidade completamente incluindo a UI, chamadas a API e etc 


### JEST

[Documentação JEST](https://jestjs.io/pt-BR/)

- Um framework de teste criado pelo Facebook

- Para instalar com o npm `npm install --save-d jest`

- Encontra automaticamente e executa os arquivos que terminam com `.test.js`

