const http = require("http");

// create server using inbuilt http module

http
  .createServer(function (req, res) {
    res.write("Maanaavan learn code");
    res.end();
  })
  .listen(3005); //listen on port 3005
