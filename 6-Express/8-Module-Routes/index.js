import express from "express";
import path from "path";
import { router } from "../8-Module-Routes/users/index.js";

import { fileURLToPath } from "url";

const usersRoutes = router;

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

app.use("/users", usersRoutes);

//Observação todas as outras rotas são criadas acima da barra, acima da rota principal
app.get("/", (req, resp) => {
  resp.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na ${port}`);
});
