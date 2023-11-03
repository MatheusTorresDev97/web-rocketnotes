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
