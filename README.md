<h1 align="center">Backend App MovieList</h1>
<p align="center">App de criação e lista de filmes</p>

<h4 align="center"> 
	Concluído
</h4>

### Features
- [x] Cadastro de Usuário
- [x] Login
- [x] Cadastro de Filme
- [x] Listar Filmes
- [x] Top 10


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/)
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o BackEnd (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/romulociro/backend-app-movieslist.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd app-to-do

# Vá para a pasta backend
$ cd backend

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn dev:server

# Para iniciar o banco de dados é necessário criar um container com a imagem do MongoDB no Docker

$ sudo apt install docker.io
$ sudo docker pull mongo
$ sudo docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME="username" -e MONGO_INITDB_ROOT_PASSWORD="senha" mongo
$ sudo docker start mongodb


# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```
### FrontEnd
https://github.com/romulociro/frontend-movieslist

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
