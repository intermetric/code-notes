---
title: React basics
emoji: 🤓
tags:
  - javascript
  - react
---

Props

```js
import React from "react";
import Hello from "./Hello";

function Greeting() {
    const firstName = "Nat";
    return (
        <div>
            <Hello helloTo="Greta"/>
            <Hello helloTo="Todd"/>
            <Hello helloTo="Chris"/>
            <Hello helloTo={ firstName }/>
        </div>
    )
}
```

```js
import React from "react";

export default function Hello() {
    return (
        <p>Hello, { props.helloTo }!</p>
    )
}
```
