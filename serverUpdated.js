// updated http server
const http = require("http");
const port = 3003;

const reqHandler = (req, res) => {
  console.log(req.url);
  res.end("hello node.js server!");
};

const server = http.createServer(reqHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log("something went wrong", err);
  }
  console.log(`server is listening on ${port}`);
});
