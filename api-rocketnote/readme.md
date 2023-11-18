iniciar o pacote do node
npm init -y

instalação do express
npm i express --save

MÉTODOS DE REQUISIÇÕES

GET - LEITURA
POST - CRIAÇÃO
PUT - ATUALIZAÇÃO
DELETE - DELEÇÃO
PATCH - ATUALIZAÇÃO PARCIAL

ROUTE PARAMS
http://localhost:3333/message/4/matheus

QUERY PARAMS
http://localhost:3333/users?page=2&limit=40

NODEMON
npm i nodemon --save-dev

ESTRUTURA INICIAL DO NOSSO PROJETO

SRC --- server.js
routes
controllers
utils
database

HTTP Status Codes
1xx --- Informativo
2xx --- Sucesso
3xx --- Redirecionamento
4xx --- Erro do cliente
5xx --- Erro no servidor

MIDDLEWARES
Funções que tem acesso ao objeto de solicitação, o objeto de resposta, e a próxima função do middleware no ciclo solicitação-resposta do app.

Biblioteca para erros
npm install express-async-errors --save

INSTALANDO O BANCO DE DADOS
npm install sqlite3 sqlite --save

SQL - COMANDOS DDL
Data Definition Language

CREATE
Criação de uma Tabela
CREATE TABLE users (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCHAR,
email VARCHAR,
password VARCHAR,
avatar VARCHAR NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

ALTER
Alterar um nome de uma tabela exemplo

ALTER TABLE users (Para alterar algo na tabela escolhida)
RENAME TO clients (Renomear para clients)

ALTER TABLE users
ADD status VARCHAR (ADD para adicionar uma coluna com o nome e o tipo)

ALTER TABLE users
RENAME COLUMN status to active (RENAME para alterar nome de uma coluna)

ALTER TABLE users
DROP COLUMN status (DROP COLUMN PARA deletar uma coluna )

COMANDOS DML
DATA MANIPULATION LANGUAGE

C - Create -> INSERT
Inserindo dados na tabela users
INSERT INTO users
(name, email, password)
VALUES
('matheuszinho', 'matheuszinho1010@email.com', '123');

R - Read -> SELECT
SELECT \* FROM users; Selecionando todos os dados da tabela coluna
SELECT id, name, email FROM users; Selecionando id, name, email da tabela users

U - Update -> UPDATE
Update/ Alterando dados de uma tabela
UPDATE users SET
avatar = 'birobirobiro.png'
WHERE id = 1

D - Delete -> DELETE
Deletando dados de uma tabela

DELETE FROM users
WHERE id = 2

PARA CRIPTOGRAFAR SENHAS PODEMOS UTILIZAR O BCRYPTJS

QUERY BUILDER
PERMITE QUE VOCÊ CONSTRUA INSTRUÇÕES SQL INDEPENDENTEN DO DB UTILIZADO
npm i knex --save

Startar o knex
npx knex init

Migrations
Forma de versionar a base de dados
trabalha na manipulaçãp de dados: criando, alterando e removendo.

Métodos de uma migrations
UP: método responsável por criar ou alterar algo no banco de dados
DOWN: responsável pelo rollback. Desfazer as alterações realizadas pela migration

criamos a migration do projeto utilizando Knex e executaremos ela para que as tabelas sejam inseridas no banco de dados.

npx knex migrate:make createNotes
Criar a tabela notas

Para rodar a migração e automatizar apos criada utilizar o comando npx knex migrate:latest

Primary key e Foreign key
A chave primária possui um id único com ela na tabela,
já a chave estrangeira faz a referência desse id da chave primária em outras tabelas.

Cardinalidade, ou seja a frequência que uma tabela se relaciona com a outra

Inner Join 
Fazer a junção de duas tabelas e trazer um resultado em conjunto desses dados.


Para gerar tokens -> npm i jsonwebtoken 
