# Performance

[Documentação Performance RN](https://reactnative.dev/docs/performance)

Performance é com que rapidez e eficiência algo funciona, um processo de optimização de performance é fazer um processo para que algo funcione de maneira melhor e mais eficiente possível, o processo de optimização é uma area bem ampla.

## Trade-Offs

- A otimização do desempenho geralmente vem com uma complexidade como custo 

	- Na maioria dos casos, a otimização não vale o custo em complexidade e manutenibilidade

- Não otimize demais até encontrar um gargalo


## Como medir a performance 

- Mantenha a configuração de ambiente atualizada e verifique se não está faltando alguma instalação 

- React Native Perf Monitor

	- Mostra para você a taxa de atualização na sua UI e no seu JS Trend
	
	- Com ele podemos ver todos os pontos do nosso aplicativo onde a taxa de atualização está tendo uma queda 

- Chrome Performance Profiler
	- Mostra um quadro das chamadas de todos os seus componentes e mostra diversas outras informações importantes
	
	- Apenas disponível em modo de desenvolvimento 


## Gargalos comuns 

- Renderizando com muita frequência

-  Mudança desnecessária de props

- Lógica desnecessária na montagem / atualização do componente 


### Renderizando com muita frequência

- Componentes vão automaticamente renderizar tudo de novo ao receber um novo props 

	- As vezes, o que recebemos por props não necessita de uma renderização completa do componente 


### Mudança desnecessária de props

- Passar props desnecessários para os filhos dos componentes pode causar um renderização desnecessária


### Lógica desnecessária na montagem / atualização do componente 

- Adicionar propriedades à instância da classe em vez de métodos na classe
	- As propriedades são criadas em cada montagem, enquanto os métodos são únicos sempre