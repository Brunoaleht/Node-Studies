const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

//setup do handlebars com command js
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  const items = ["item A", "item B", "item C"];
  res.render("dashboard", { items });
});

app.get("/post", (req, res) => {
  const post = {
    title: "Aprender NodeJs",
    category: "JavaScript",
    description: "É um curso de node",
    body: "É de suma importância aprender node js para sua carreira de dev",
    numberComment: 4,
  };
  res.render("blogpost", { post });
});
app.get("/", (req, res) => {
  const user = {
    firstName: "Bruno",
    lastName: "Alexandre",
    age: 25,
  };

  const titulo2 = "Titulo teste";
  const auth = true;
  const approved = false;

  res.render("home", { user, titulo2, auth, approved });
});

app.listen(3000, () => {
  console.log("App Funcionando");
});
