# simulador-de-juros
Projeto desenvolvido para calcular juros de cartão de crédito e praticar JavaScript.

## Descrição:
Inicialmente, criei esse projeto no Excel. Tive a idéia quando prestava serviço a um Banco, e durante um atendimento o cliente pediu uma simulação de juros, caso pagasse dias após o vencimento. Não tinha noção sobre o calculo e nem mesmo o sistema para calcular.

Desde então, comecei a pesquisar como era feito esse calculo e criei uma planilha em Excel.

Após um bom conhecimento em programação, através do curso do Programador BR, decidi codar esse projeto.

Hoje, o objetivo é facilitar o entendimento de clientes, em relação como funciona o calculo de juros dos cartões de créditos. Trazendo assim, uma previsão de como ficaria o valor de uma fatura em caso de pagamento mínimo ou atraso total da fatura.

## Como usar:

- Na tela inicial, para seguir, necessário inserir o nome;
- Em opções de pagamento, pode escolher entre PAGAMENTO MÍNIMO ou APÓS VENCIMENTO. Ao lado, o ícone "i" irá mostrar a finalidade de cada um e quais juros estão inclusos;
- Após escolher a opçao desejada, deve preencher todos os campos. Caso não, o sistema irá informar que há dados faltantes;
- Por fim, somente clicar me simular;
- UM ADENDO: No pagamento mínimo, os bancos estipulam em média 15% em relação ao valor total da fatura. Caso o valor seja inferior, o sistema irá informar o valor mínimo estipulado;

## Técnicas de JavaScript:

No JavaScript, foram criadas as funções:

 - [x] getName(): Alerta o cliente a inserir o nome, na página inicial. Caso não insira, não é possível avançar a página;
 - [x] popUp1 e 2(): Mostra informações sobre os juros de pagamento mínimo e após vencimento;
 - [x] calcDate(): Calcula os dias em atraso, de acordo com data de vencimento e data de pagamento;
 - [x] realCurrency(): Transforma os valores em moeda real;
 - [x] minimum(): Informa o valor mínimo permitido para pagamento, calcula juros e valor final, quando cliente opta pelo pagamento mínimo;
 - [x] late(): Calcula juros e valor final, quando cliente opta pelo pagamento total atrasado;

## Técnicas de CSS:

 - [x] Aperfeiçoando técnica de glassmorphism;
 - [x] Flexbox;
 - [x] Position;
 - [X] Keyframes;

## Projeto:

<p align="center">
  <img src="jura.gif" width="300px">
</p>

## Tecnologias:

[![HTML](https://img.shields.io/badge/HTML-red?style=for-the-badge&logo=HTML5&labelColor=black)](https://github.com/JuniorMacedo91)
[![CSS](https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=CSS3&labelColor=black)](https://github.com/JuniorMacedo91)
[![JavaScript](https://img.shields.io/badge/javascript-yellow?style=for-the-badge&logo=javascript&labelColor=black)](https://github.com/JuniorMacedo91)
[![Figma](https://img.shields.io/badge/figma-teal?style=for-the-badge&logo=figma&labelColor=black)](https://github.com/JuniorMacedo91)

## Site:
https://juniormacedo91.github.io/simulador-de-juros/
