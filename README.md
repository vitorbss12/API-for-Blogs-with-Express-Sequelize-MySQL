# Blogs Api - Node.js, Express, JWT, Sequelize e MySQL

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=vitorbss12_API-for-Blogs-with-Express-Sequelize-MySQL&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=vitorbss12_API-for-Blogs-with-Express-Sequelize-MySQL)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=vitorbss12_API-for-Blogs-with-Express-Sequelize-MySQL&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=vitorbss12_API-for-Blogs-with-Express-Sequelize-MySQL)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=vitorbss12_API-for-Blogs-with-Express-Sequelize-MySQL&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=vitorbss12_API-for-Blogs-with-Express-Sequelize-MySQL)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=vitorbss12_API-for-Blogs-with-Express-Sequelize-MySQL&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=vitorbss12_API-for-Blogs-with-Express-Sequelize-MySQL)

Este projeto é uma de `API` seguindo princípios `REST` para um blog, onde o usuário pode criar, ler, atualizar e deletar posts, fazer login, criar cadastro, categorias e consulta-los. O projeto foi desenvolvido em `Node.js`, `Express`, `JWT`, `Sequelize`, `MySQL`, além de outras ferramentas. Consiste em um `CRUD` de postagens com arquitetura MSC (`Model`, `Service`, `Controller`) e rotas bem definidas. O projeto foi desenvolvido em ambiente de desenvolvimento utilizando containers `Docker`, onde o banco de dados `MySQL` é criado e populado utilizando `Sequelize`.

## Conteúdo

- [Blogs Api - Node.js, Express, JWT, Sequelize e MySQL](#blogs-api---nodejs-express-jwt-sequelize-e-mysql)
  - [Conteúdo](#conteúdo)
- [**Arquitetura**](#arquitetura)
    - [**Arquitetura de Camadas MSC**](#arquitetura-de-camadas-msc)
    - [**Estrutura do Diretório**](#estrutura-do-diretório)
- [**API Endpoints**](#api-endpoints)
    - [**``POST /api/login``**](#post-apilogin)
    - [**``GET /api/users``**](#get-apiusers)
    - [**``GET /api/users/:id``**](#get-apiusersid)
    - [**``POST /api/users``**](#post-apiusers)
    - [**``DELETE /api/users/me``**](#delete-apiusersme)
    - [**``GET /api/categories``**](#get-apicategories)
    - [**``POST /api/categories``**](#post-apicategories)
    - [**``GET /api/posts``**](#get-apiposts)
    - [**``GET /api/posts/:id``**](#get-apipostsid)
    - [**``GET /api/posts/search?q=searchTerm``**](#get-apipostssearchqsearchterm)
    - [**``POST /api/posts``**](#post-apiposts)
    - [**``PUT /api/posts/:id``**](#put-apipostsid)
    - [**``DELETE /api/posts/:id``**](#delete-apipostsid)
- [**Instruções**](#instruções)
    - [**Instalação e Execução**](#instalação-e-execução)
      - [**Local**](#local)
      - [**Docker**](#docker)
- [**Ferramentas**](#ferramentas)
    - [**Linter**](#linter)
    - [**Node**](#node)
    - [**Express**](#express)
    - [**Docker**](#docker-1)
    - [**Nodemon**](#nodemon)
    - [**MySQL**](#mysql)
    - [**Sequelize**](#sequelize)
    - [**JWT**](#jwt)
    - [**Joi**](#joi)
    - [**dotenv**](#dotenv)
- [**Observações**](#observações)

# **Arquitetura**

### **Arquitetura de Camadas MSC**

O projeto possui arquitetura de camadas MSC (`Model`, `Service`, `Controller`), onde cada camada é responsável por uma única funcionalidade.

### **Estrutura do Diretório**
````
src
  ├── api.js            definições de middlewares e rotas da API
  ├── server.js         inicialização da API
  ├── /controllers      camada de controller - requisição do cliente para a API
  ├── /database         conexão com o banco de dados
    ├── /config         config sequelize
    ├── /migrations     migrations do banco de dados
    ├── /models         camada de model - conexão com o banco de dados
    ├── /seeders        população do banco de dados
  ├── /middlewares      Validação e autenticação de dados
    ├── /schemas        esquemas de validação para o JOI
  ├── /routes           rotas para cada endpoint
  ├── /services         camada de service - regras de negócio
  ````

# **API Endpoints**

<details>
  <summary><strong>Login</strong></summary>

  ### **``POST /api/login``**

  Body:
  ````
  {
    "email": "exemplo@gmail.com",
    "password": "123456"
  }
  ````
  - Só é possível fazer login com email e senha válidos. Caso login seja feito com sucesso um token é gerado utilizando o JWT.
  <br />
</details>

##

<details>
  <summary><strong>Users</strong></summary>

  ### **``GET /api/users``**

  - Retorna todos os usuários cadastrados.
  - Necessita do Authorization header com o token gerado pelo login/sign-up.

  ### **``GET /api/users/:id``**

  - Retorna um usuário específico pelo id.
  - Necessita do Authorization header com o token gerado pelo login/sign-up.

  ### **``POST /api/users``**
  Body:
  ````
  {
    "displayName": "Exemplo",
    "email": "exemplo@email.com",
    "password": "123456",
    "image": "exemplo.png"
  }
  ````
  - Só é possível criar usuários com email que não estejam cadastrados no banco de dados e os demais dados válidos.
  - Esse endpoint não necessita do Authorization header.
  - Caso usuário seja criado com sucesso, um token é gerado utilizando o JWT.

  ### **``DELETE /api/users/me``**

  - Deleta um usuário com base no token.
  - Necessita do Authorization header com o token gerado pelo login/sign-up.

  <br />
</details>

##

<details>
  <summary><strong>Categories</strong></summary>

  ### **``GET /api/categories``**

  - Retorna todas as categorias cadastradas.
  - Necessita do Authorization header com o token gerado pelo login/sign-up.

  ### **``POST /api/categories``**

  Body:
  ````
  {
    "name": "Exemplo"
  }
  ````

  - Só é possível criar categorias com nome que não estejam cadastradas no banco de dados.
  - Necessita do Authorization header com o token gerado pelo login/sign-up.

  <br />
</details>

##

<details>
  <summary><strong>Posts</strong></summary>

  ### **``GET /api/posts``**

  - Retorna todos os posts cadastrados.
  - Necessita do Authorization header com o token gerado pelo login/sign-up.

  ### **``GET /api/posts/:id``**

  - Retorna um post específico pelo id.
  - Necessita do Authorization header com o token gerado pelo login/sign-up.

  ### **``GET /api/posts/search?q=searchTerm``**

  - Retorna todos os posts que contenham o termo de busca no titulo ou no conteúdo.
  - Necessita do Authorization header com o token gerado pelo login/sign-up.

  ### **``POST /api/posts``**

  Body:
  ````
  {
    "title": "Exemplo",
    "content": "Exemplo",
    "categoryIds": [1, 2],
  }
  ````

  - Só é possível criar posts com título, conteúdo e categorias válidos.
  - Necessita do Authorization header com o token gerado pelo login/sign-up.
  - O cadastro de posts no banco de dados é feito através de Managed Transactions no Sequelize.

  ### **``PUT /api/posts/:id``**

  Body:
  ````
  {
    "title": "Exemplo",
    "content": "Exemplo",
  }
  ````

  - Só é possível atualizar posts com título e conteúdo válidos.
  - Só é possível atualizar posts do usuário que o criou.
  - Necessita do Authorization header com o token gerado pelo login/sign-up.

  ### **``DELETE /api/posts/:id``**

  - Deleta um post com base no id.
  - Só é possível deletar posts do usuário que o criou.
  - Necessita do Authorization header com o token gerado pelo login/sign-up.

  <br />
</details>

##

# **Instruções**

### **Instalação e Execução**

A instalação e execução vai depender do ambiente (`Local` ou `Docker`) que você está utilizando. É necessário ter o `Node.js` instalado na máquina. Cada particularidade será explicada a seguir.

`Scrips` de instalação e execução:
####
**Instalar dependências:**
````
npm install
````

**Criar o banco de dados:**
````
npm run prestart
````

**População do banco de dados:**
````
npm run seed
````

**Excluir o banco de dados:**
````
npm run drop
````

**Executar o servidor:**
````
npm start
````

**Executar o servidor com `Nodemon`:**
````
npm run debug
````

#### **Local**

Para execução do ambiente local é necessário ter o `MySQL` instalado e rodar o `scripts` anteriores.

#### **Docker**

Para execução do ambiente docker é necessário ter o `Docker` e `docker-compose` instalado.

**Iniciar os containers:**
````
docker-compose up -d
````
Esse comando inicia os containers do node e do mysql.

**Acessar CLI do Container:**
````
docker exec -it blogs_api bash
````
Caso opte por usar o Docker os `scripts` de instalação e execução **DEVERÃO** ser executados dentro do container.

# **Ferramentas**

### **Linter**

Este projeto foi desenvolvido utilizando o linter `ESLint` seguindo as boas práticas definidas na [Trybe](https://www.betrybe.com/).

  - Para executar o linter, basta executar o comando:
````
npm run lint
````

### **Node**

Para executar as funções deste projeto, é necessário ter o [Node](https://nodejs.org/en/) instalado.

### **Express**

`Express` é uma biblioteca para criação de aplicações web.

### **Docker**

`Docker` é um ambiente de execução de aplicações que permite a criação de containers para execução de aplicações.

### **Nodemon**

`Nodemon` é um serviço que monitora alterações no código e reinicia o servidor automaticamente.

### **MySQL**

`MySQL` é um banco de dados relacional, e foi utilizado para a criação do banco de dados deste projeto.

### **Sequelize**

Sequelize é uma biblioteca `ORM` para o banco de dados. É utilizado para a criação do banco de dados deste projeto, populando o banco e utilizado para o desenvolvimento das funções da camada `Model`.

### **JWT**

`JWT` é uma biblioteca para criação de tokens. É utilizado para geração de tokens para autenticação de usuários da api.

### **Joi**

`Joi` é uma biblioteca para validação de dados. É utilizado para validação de dados de entrada da api.

### **dotenv**

`dotenv` é uma biblioteca para leitura de arquivos de configuração. É utilizado para leitura de variáveis de ambiente.

# **Observações**

- Este é um projeto de estudo desenvolvido durante minha formação na [Trybe](https://www.betrybe.com/). :rocket:

- Este repositório está sendo monitorado pelo [SonarCloud](https://sonarcloud.io/) para avaliação de qualidade.

- Quer saber mais sobre mim? Veja o meu [LinkedIn](https://www.linkedin.com/in/vitorbss/).