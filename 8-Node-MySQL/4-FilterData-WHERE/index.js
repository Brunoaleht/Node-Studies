import express from "express";
import exphbs from "express-handlebars";
import mysql from "mysql";

const app = express();

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql",
});

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/books/insertbook", (req, res) => {
  const title = req.body.title;
  const pages = req.body.pages;

  const sql = `INSERT INTO books (title, pages) VALUES ('${title}', '${pages}')`;
  conn.query(sql, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect("/books");
  });
});

app.get("/books", (req, res) => {
  const sql = "SELECT * FROM books";

  conn.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const books = data;

    res.render("books", { books });
  });
});

app.get("/books/:id", (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM books WHERE id = ${id}`;
  //observação o WHERE vai trazer uma lista e não apenas um elemento

  conn.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return
    }

    const book = data[0];
    res.render("book", { book });
  });
});

conn.connect((err) => {
  if (err) {
    console.log(err);
  }

  console.log("Connected MySQL!");

  app.listen(3000);
});
