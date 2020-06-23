---
title: Cycle through an array
tags:
  - javascript
  - vue
---

```html
<main id="app">
    <button @click="currentItemIndex++"></button>
    <button @click="currentItemIndex--"></button>
    <h3>{{ currentItem.name }}</h3>
    <img :src="currentItem.image">
    <p>{{ currentItem.bio }}</p>
</main>
```

```js
const items = [{}];

const app = new Vue({
    el: "#app",
    data: () => ({
        currentItemIndex: 0,
    }),
    computed: (
        currentItem() {
            return items[this.currentItemIndex % items.length]
        },
    ),
})
```
