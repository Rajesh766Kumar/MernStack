const http = require("http");
const Nm = require("./cybrom");

http.createServer((req, res) => {
    res.write("<h1>Welcome node js</h1>");
    res.write(Nm.myName());
    res.write(Nm.myClass());
    res.end();
  }).listen(8000);
