const express = require("express");
const app = express();

const port = 3000;

//localhost:3000
app.get("/", (req, res) => res.send("Maanavan.com"));
app.listen(port, () => console.log("server is running"));
