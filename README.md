# 📦 API StarWars - Node.js + Javascript + MongoDB

API simples para cadastro de filmes da saga Star Wars, desenvolvida com **Node.js**, **Express** e **MongoDB**.

---

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://github.com/motdotla/dotenv)

---

## ⚙️ Configuração

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/matteussaraujo/starwars-api-node.git
cd STARWARS-API
npm install
```

Crie um arquivo .env na raiz do projeto:

MONGO_URI=sua_string_de_conexao_mongodb
PORT=3000

⚠️ O .env já está no .gitignore, então suas credenciais ficam protegidas.

## ▶️ Executando o projeto

Execute o projeto com o Node, apontando para o arquivo principal:

```bash
node src/server.js
```

📌 Rotas
GET /

Retorna uma mensagem de teste.

Exemplo de resposta:

"API funcionando 🚀"

POST /

Cadastra um filme no banco.

Body esperado (JSON):

{
"title": "Star Wars",
"description": "Uma saga épica",
"image_url": "http://exemplo.com/imagem.jpg",
"trailer_url": "http://exemplo.com/trailer.mp4"
}

Exemplo de resposta:

{
"\_id": "64f7d8e3f5a2b9c7e4a1d123",
"title": "Star Wars",
"description": "Uma saga épica",
"image_url": "http://exemplo.com/imagem.jpg",
"trailer_url": "http://exemplo.com/trailer.mp4",
"\_\_v": 0
}

PUT /:id

Atualiza os dados de um filme pelo ID.

Body esperado (JSON):

{
"title": "Star Wars - Episódio IV",
"description": "Saga épica atualizada",
"image_url": "http://exemplo.com/nova_imagem.jpg",
"trailer_url": "http://exemplo.com/novo_trailer.mp4"
}

{
"\_id": "64f7d8e3f5a2b9c7e4a1d123",
"title": "Star Wars - Episódio IV",
"description": "Saga épica atualizada",
"image_url": "http://exemplo.com/nova_imagem.jpg",
"trailer_url": "http://exemplo.com/novo_trailer.mp4",
"\_\_v": 0
}

DELETE /:id

Remove um filme pelo ID.

Exemplo de resposta:

{
"\_id": "64f7d8e3f5a2b9c7e4a1d123",
"title": "Star Wars",
"description": "Uma saga épica",
"image_url": "http://exemplo.com/imagem.jpg",
"trailer_url": "http://exemplo.com/trailer.mp4",
"\_\_v": 0
}
