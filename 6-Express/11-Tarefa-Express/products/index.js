import express from "express";

import path from "path";
export const router = express.Router();
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basePath = path.join(__dirname, "../templets");



router.get("/:id", (req, resp) => {
  const id = req.params.id;

  //Isso quer dizer q estou fazendo uma leitura da table users de um db, e pegando um user a partir da id
  console.log(`Estamos buscando o product por sua id: ${id}`);
  resp.sendFile(`${basePath}/products.html`);
});

