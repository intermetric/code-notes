---
title: Add key to object conditionally using spread
tags:
  - javascript
link: https://dev.to/girlie_mac/spread-syntax-three-dots-tricks-you-can-use-now-aob
---

```js
const user = {
     firstName: input.firstName,
     ...(input.lastName ? { lastName: input.lastName } : null)
}
```
