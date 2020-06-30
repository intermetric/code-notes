---
title: Creating a server with Node.js 
tags:
  - javascript
  - node
  - http
---

```js
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader("Content-Type", "text/html");

    // basic routing
    let path = "./views/";

    switch(req.url) {
      case "/":
        path += "index.html";
        res.statusCode = 200;
        break;
      case "/about":
        path += "about.html";
        res.statusCode = 200;
        break;
      // redirecting
      case "/about-me":
        res.statusCode = 301;
        res.setHeader("Location", "/about");
        res.end();
      default:
        path += "404.html";
        res.statusCode = 404;
        break;
    }

    // send data/file to the client
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.end(data);
      }
    })
});

server.listen(3000, "localhost", () => {
    console.log("listening to requests");
})
```
