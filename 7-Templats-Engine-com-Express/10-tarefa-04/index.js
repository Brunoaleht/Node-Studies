const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static('public'))
const products = [
  {
    id: 1,
    name: "Bolsa de Couro",
    price: 23.0,
  },
  {
    id: 2,
    name: "Sapato de Couro",
    price: 50.0,
  },
  {
    id: 3,
    name: "Jaqueta de Couro",
    price: 150.0,
  },
];
app.get("/", (req, res) => {
  res.render("home", { products });
});

app.get("/products/:id", (req, res) => {
  const product = products[parseInt(req.params.id) - 1];
  res.render("productId", { product });
});

app.listen(3000, () => {
  console.log("App Funcionando");
});
