import console from "console";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basePath = path.join(__dirname, "templets");
const app = express();

const port = 3000; //varivel ambiente

//Isso aqui é usado para converter o req.body em um object json, para ser cadastrado em um db
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/users/add", (req, res) => {
  res.sendFile(`${basePath}/userForm.html`);
});

app.post("/users/save", (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const age = req.body.age;

  console.log(`O nome do user é ${name} e ele tem ${age} anos`)

  res.sendFile(`${basePath}/userForm.html`)
});

app.get("/users/:id", (req, resp) => {
  const id = req.params.id;

  //Isso quer dizer q estou fazendo uma leitura da table users de um db, e pegando um user a partir da id
  console.log(`Estamos buscando o user por sua id: ${id}`);
  resp.sendFile(`${basePath}/users.html`);
});

//Observação todas as outras rotas são criadas acima da barra, acima da rota principal
app.get("/", (req, resp) => {
  resp.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na ${port}`);
});
