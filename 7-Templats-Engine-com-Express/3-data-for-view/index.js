const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

//setup do handlebars com command js
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  const user = {
    firstName: "Bruno",
    lastName: "Alexandre",
    age: 25,
  };

  const titulo2 = "Titulo teste";
  res.render("home", { user, titulo2 });
});

app.listen(3000, () => {
  console.log("App Funcionando");
});
