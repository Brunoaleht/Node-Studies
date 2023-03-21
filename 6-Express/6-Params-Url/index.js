import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basePath = path.join(__dirname, "templets");
const app = express();

const port = 3000; //varivel ambiente

app.get("/users/:id", (req, resp) => {
  const id = req.params.id;

  //Isso quer dizer q estou fazendo uma leitura da table users de um db, e pegando um user a partir da id
  console.log(`Estamos buscando o user por sua id: ${id}`)
  resp.sendFile(`${basePath}/users.html`);
});

//Observação todas as outras rotas são criadas acima da barra, acima da rota principal
app.get("/", (req, resp) => {
  resp.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na ${port}`);
});
