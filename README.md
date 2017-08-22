# myportfolio

# Descrição

Este é um projeto de um aplicativo de criação de portfólios voltado especialmente para Desenvolvedores Web e Fotógrafos, criado na intenção de que seja possível enviar tanto os trabalhos do Desenvolvedor, quanto do Fotógrafo. Sendo possível também adicionar os dados do profissional para contato.
 
# Objetivo

Para a última nota da disciplina de Linguagem de Script do curso de Sistemas para Internet no IFPB, foi dada a tarefa de criação de um sistema Web com a utilização de Script. Este deve apresentar os seguintes critérios:

* Organização do código
* Uso de programação funcional
* Validação por meio de RegExp
* Criação de componentes dinâmicos
* Uso de AJAX e JSON
* Uso de módulos com Webpack
* Uso de extensões no JS

# Inspiração

A inspiração veio de diferentes sites: O login dos usuários foi inspirado no do site [GitHub][github]. A página de cadastro no [Google Forms][gforms] e o site em geral foi inspirado em sites de criação de portfólios como o [Adobe Portfólio][adobeport]

# Protótipos

![print1][foto1]

O site possuirá essencialmente 6 páginas dentre as quais:

*Home Page: Possui a descrição do aplicativo.

*Página do Perfil: Um exemplo de como o Portfolio do usuario será.

*Página de Sugestões: Ao preencher os campos e clicar em enviar, um e-mail é mandado aos desenvolvedores para possíveis mudanças no aplicativo. 
Haverá um campo de pesquisa no topo da página e ao lado colocaremos um filtro de busca para caso o leitor queira especificar mais ainda as notícias apresentadas

*Página de Login: Aqui é feito o login, caso esteja cadastrado

*Página de Cadastro: O formulário de cadastro de novos usuários que utiliza a API [ViaCEP][viacep] para ajudar a completar rapidamente as informações.

*Página do Administrador: Lista os dados dos usuários cadastrados por meio do [IndexedDB][indexeddb] através da extensão [Tablesorter](http://tablesorter.com/docs/) para o Javacript


# Recursos da API  

* O IndexedDB é um banco de dados noSQL que fica diretamente no browser, o que possibilita a inserção de dados sem a necessidade de um banco local aberto.
* ViaCEP é uma API que resgata informações sobre UF, Cidade, Rua, dentre outros dados, através de um número de CEP.
* Tablersorter é uma extensão Javascript que serve para criar uma tabela mais organizada, com possibilidade de tema, em que é possível organizar os dados de acordo com colunas da tabela.

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [adobeport]: <https://www.myportfolio.com/>
   [gforms]: <https://docs.google.com/forms/>
   [github]: <https://github.com/>
   [foto1]: <Prototipo01.jpg>
   [viacep]: <https://viacep.com.br/>
   [indexeddb]: <https://developer.mozilla.org/pt-BR/docs/IndexedDB/>
   
   
