const express = require("express");
const app = express();
const port = 3005;

let products = [
  {
    id: 1,
    name: "laptop",
    price: 1000,
    brand: "dell",
  },
  {
    id: 2,
    name: "mobile",
    price: 500,
    brand: "samsung",
  },
  {
    id: 3,
    name: "tv",
    price: 2000,
    brand: "sony",
  },
  {
    id: 4,
    name: "watch",
    price: 100,
    brand: "titan",
  },
];

app.get("/", (req, res) => {
  res.send("Welcome To The Express Server!");
});

app.get("/products", (req, res) => {
  res.send({
    products: products,
  });
});

app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((product) => product.id == id);
  if (!product) {
    return res.status(404).send({ error: "Product not found" });
  }
  res.send({ product: product });
});

app.listen(port, () => {
  console.log(`Server listening on the port: ${port}`);
});
