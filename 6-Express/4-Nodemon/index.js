import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const basePath = path.join(__dirname, "templets");
const app = express();

const port = 3000; //varivel ambiente

app.get("/", (req, resp) => {
  resp.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na ${port}`);
});
