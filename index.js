const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const connectToDb = require("./DataBase/db");

connectToDb();
const app = express();
const port = 3000;

// app.use(express.json());
app.set("view engine", "ejs");
//aqui estou mandando o codigo estático para o navegador
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
//Aqui estou usando as rotas que estou extraindo do arquivo rotas
app.use(routes);

//aqui criei uma função que exibe a porta 3000 no meu localhost
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/home `);
});
