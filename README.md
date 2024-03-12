# BiblioGest
    Este projeto consiste no desenvolvimento e todas as suas etapas e processos, de uma aplicação mobile, especificamente para o sistema Android, designada para o gerenciamento de bibliotecas. A aplicação será capaz de cadastrar usuários e suas informações básicas pessoais, livros e as suas características, tais como: Autor Título, Editora, Autor, ISBN, Categoria e outros. A funcionalidade de fazer reservas de livros deverá ser contemplada, associada ao cliente, bem como a data de início e fim de empréstimo do livro.

## Objectivo Específicos  

    • Levantamento de requisitos;  
    • Modelar a aplicação com base os requisitos levantados;  
    • Desenvolvimento da base de dados da aplicação; 
    • Desenvolvimento das interfaces da aplicação (Front-End); 
    • Desenvolvimento das funcionalidades da aplicação (Back-End);
    • Interligar o Front-End e o Back-End;
    • Testar a aplicação;
    • Melhorar aspectos técnicos da aplicação;
    • Finalizar a aplicação.  


## Pré-Requisitos do Sistema
	Requisitos de Hardware
Para o efetivo funcionamento da aplicação, os dipositivos/equipamentos móveis deverão satisfazer no mínimo os seguintes requisitos:

- ITEM
1 - Processador
2 - Memória Livre: 30 Mb ou 55 Mb
3 - RAM: 512 Mb ou 2 Gb
4 - Tamanho de Telas: 4’’ | 5” ou 6” | 7” | 10”

## requisito de software
- ITEM
1 - Sistema Operacional
Android 7.0 “Nougat”
Android 13 (T)

## Requisitos funcionais

- O sistema deve permitir cadastro e login solicitando Nome de Usuário e Senha 

- O sistema deve apenas autenticar e logar usuários cadastrados

- O sistema deverá possuir 3 tipos de usuários: Admin, Bibliotecário e Cliente
- O sistema deve solicitar o Nome Completo, Telemóvel, Morada, BI

- O sistema deve permitir alteração de Senha, Telemóvel e Morada de Usuário cadastrado

- O sistema deve possuir perfil de usuário
- O sistema deve apresentar ao usuário o seu Histórico de Reservas dos livros

- O sistema de permitir ao Admin e aos Bibliotecários cadastrar livros ao acervo, com os seguintes dados: ISBN, Título, Autor, Editora, Ano e Categoria 

- O código ISBN deverá conter 13 dígitos, apenas números

- O sistema deve garantir que apenas os Admin’s removam obras do acervo

- O sistema deve permitir a edição dos dados de cadastro dos livros

- O sistema deve permitir atribuir aos livros as seguintes categorias: Romance, Drama, Novela, Conto, Poesia, Ficção, Biografia, Literatura Infantil e Terror

- O sistema deve permitir que os Usuários façam reservas dos livros disponíveis

- O sistema deve mostrar o estado de livro Reservado, data de início/fim da reserva e não deverá permitir uma nova reserva para os Usuários

- O sistema deve mostrar o estado de livro Reservado, data de início/fim da reserva, os dados do usuário que Reservou para os Bibliotecários e ao Admin

- O sistema deverá permitir pesquisa de livros, por Título, Autor, ISBN e Categoria


## Requisitos não funcionais

Desempenho - O sistema deverá autenticar/logar em, no máximo, 5 segundos

Desempenho - O sistema deverá apresentar resultados de pesquisa de livros com o tempo limite de 5 segundos

Segurança - O sistema deve manter os dados de autenticação criptografados na base de dados

Segurança - O sistema de garantir que apenas usuários cadastrados têm acesso à plataforma

Usuabilidade - O Administrador e os Bibliotecários devem ser capazes de usar a aplicação depois de um treinamento de 2 horas

Usuabilidade - O sistema deve ser amigável o suficiente para que os usuários não precisem de treinamento

Usuabilidade - As cores das telas devem ser claras em contraste com os textos para facilitar a visualização dos usuários

Confiabilidade -  sistema deve estar disponível 24h/7dias

Escalabilidade - O sistema deve suporte 5.000 usuários em condições normais e com limite máximo de 10.000


## Regras de negócio

- Caso o usuário não restitua o livro no prazo definido, o sistema gera uma notificação de multa de 1000 Kz/dia

- Caso o usuário danifique o livro, deve pagar uma taxa fixa de 30.000 Kz


##  Restrições do Sistema

- Caso o usuário danifique o livro, deve pagar uma taxa fixa de 30.000 Kz

- O sistema funcionará apenas em dispositivos moveis Android

- A aplicação não funcionará em dispositivos com menos de 512 Mb de memória RAM e com tela inferior a 4” (polegadas)

