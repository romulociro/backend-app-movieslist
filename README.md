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

# Para iniciar o banco de dados é necessário criar um container com a imagem do MongoDB no Docker
$ sudo apt install docker.io
# Download Docker Composer
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
# Aplicar permissões executáveis para o binário baixado
$ sudo chmod +x /usr/local/bin/docker-compose
# Na pasta do projeto clonado
$ sudo docker-compose up -d

# Execute a aplicação em modo de desenvolvimento
$ yarn dev:server

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>

# Após subir a aplicação a documentação estará no link
http://localhost:3333/api-docs/
```
### FrontEnd
https://github.com/romulociro/frontend-movieslist

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
