import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { router } from "../11-Tarefa-Express/products/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basePath = path.join(__dirname, "templets");
const app = express();

const productsRoutes = router;
const port = 5000; //varivel ambiente
app.use(express.static('public'))

app.use("/products", productsRoutes);

app.get("/", (req, resp) => {
  resp.sendFile(`${basePath}/index.html`);
});

app.use((req, res, next) => {
  res.status(404).sendFile(`${basePath}/404.html`);
});

app.listen(port, () => {
  console.log(`App rodando na ${port}`);
});

