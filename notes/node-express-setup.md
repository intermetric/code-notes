---
title: Creating a server with Express.js 
tags:
  - javascript
  - node
  - http
  - express
---

with HTML

```js
const express = require("express");

const app = express();

// listen for requests
app.listen(3000);

// static file serving
app.use(express.static("public"));

// GET
app.get("/about", (req, res) => {
    res.sendFile("./views/about.html", { root: __dirname });
});

// redirecting
app.get("/about-me", (req, res) => {
    res.redirect("/about");
});

// 404
app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", { root: __dirname });
});
```

with ejs

```js
const express = require("express");

const app = express();

// register view engine
app.set("view engine", "ejs");

// listen for requests
app.listen(3000);

// GET
app.get("/about", (req, res) => {
    res.render("about", { title: "About" })
});
```

about.ejs

```html
<title> <%= title %> </title>
```
