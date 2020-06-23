---
title: Toggle a class and change content with Vanilla JS
tags:
  - javascript
---

```js
const button = document.querySelector("#buttonID");
const someElement = document.querySelector("#elementID");

button.addEventListener("click", () => {
  if (document.body.classList.contains("button")) {
    someElement.textContent = "hi";
  } else {
    someElement.textContent = "bye";
  }
  document.body.classList.toggle("button");
});
```
