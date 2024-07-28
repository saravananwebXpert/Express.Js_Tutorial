const express = require("express");
const app = express();

const port = 3000;

// create server using express js
//localhost:3000

app.get("/", (req, res) => res.send("Maanavan.com"));
app.listen(port, () => console.log("server is running"));

const products = [
  {
    id: 1,
    name: "IPhone",
    price: 1000,
  },
  {
    id: 2,
    name: "Mac book pro",
    price: 5000,
  },
];

const product = [
  {
    id: 1,
    name: "IPhone",
    price: 1000,
  },
];

app.get("/products", (req, res) => res.send(products));
app.get("/products/1", (req, res) => res.send(product));
