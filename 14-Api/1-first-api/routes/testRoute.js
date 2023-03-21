import { Router } from "express";

const testRoutes = Router();

testRoutes.get("/", (req, res) =>
  res.status(200).json({ massage: "Olá Mundo" })
);
testRoutes.post("/create", (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  if (!name) {
    res.status(422).json({ message: "name is required" });
    return
  }

  res
    .status(201)
    .json({ message: `The product ${name} is create with success` });
});

export default testRoutes;
