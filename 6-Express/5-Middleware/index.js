import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basePath = path.join(__dirname, "templets");
const app = express();

const port = 3000; //varivel ambiente

const checkAuth = (req, res, next) => {
  req.checkAuth = true;
  if (req.checkAuth) {
    console.log("Está Logado Pode continuar");
    next(); //O next é essência para q não trave o sistema
  } else {
    console.log("Faça o Login");
    next(); //O next é essência para q não trave o sistema
  }
};

app.use(checkAuth);

app.get("/", (req, resp) => {
  resp.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na ${port}`);
});
