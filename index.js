const express = require("express");
const app = express();

const port = 3000;

// create server using express js
//localhost:3000

app.get("/", (req, res) => res.send("Maanavan.com"));
app.listen(port, () => console.log("server is running"));
