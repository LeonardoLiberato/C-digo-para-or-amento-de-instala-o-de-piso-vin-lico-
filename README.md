# Calculadora de Instalação de Piso Vinílico

Este projeto é uma calculadora de instalação de piso vinílico que permite aos usuários calcular o custo total da instalação com base nas dimensões do cômodo e na largura do rodapé escolhidos.

## Descrição do Projeto

O projeto consiste em uma calculadora de instalação de piso vinílico que oferece uma interface simples e intuitiva para os usuários inserirem as dimensões do cômodo (largura e comprimento em metros) e selecionarem a largura do rodapé (em centímetros). Com base nessas entradas, a calculadora realiza os seguintes cálculos:

1. Calcula o custo da mão de obra com base na área do cômodo:
   - Até 80 metros quadrados: R$ 35,00 por metro quadrado
   - Entre 80 e 160 metros quadrados: R$ 30,00 por metro quadrado
   - Acima de 160 metros quadrados: R$ 25,00 por metro quadrado

2. Calcula o custo do rodapé com base na largura escolhida pelo usuário:
   - O custo do rodapé é calculado multiplicando o valor da largura do rodapé pelo número total de metros lineares do rodapé (calculado como largura * comprimento do cômodo).

3. Soma o custo da mão de obra e o custo do rodapé para obter o custo total da instalação.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **calculadora_instalacao_piso_vinilico (html)**: Diretório principal do projeto.
   - **index.html**: Página HTML que contém o formulário de entrada e exibe o resultado do cálculo.
   - **styles.css**: Arquivo CSS que define o estilo da página HTML.
   - **script.js**: Arquivo JavaScript que contém a lógica de interação do usuário.
   - **chart.js**: Biblioteca JavaScript usada para criar gráficos (se quiser acrescentar grafico).
## Tecnologias Utilizadas

- HTML, CSS, JavaScript: Utilizados para criar a interface do usuário e adicionar interatividade à página.
- Chart.js: Biblioteca JavaScript usada para criar gráficos (se quiser acrescentar grafico).

## Como Usar

1. Abra o arquivo `index.html` em qualquer navegador da web.
2. Insira as dimensões do cômodo e selecione a largura do rodapé.
3. Clique no botão "Calcular" para ver o custo total da instalação.

Se precisar de mais alguma coisa ou se tiver outras perguntas, estou à disposição para ajudar!
