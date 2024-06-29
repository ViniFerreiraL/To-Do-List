const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://Router:admin@cluster0.adkx9ue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    //Aqui estou tentando testando, caso esteja tudo certo ele me passa essa mensagem
    .then(() => {
      console.log("Mongo Atlas Conectado");
    })
    //caso de erro ele me passa essa mensagem
    .catch((erro) => {
      console.error(erro);
    });
};

module.exports = connectToDb;
