---
title: React hooks
tags:
  - react
---

`useMemo` work similarly to `useEffect` in that it takes a dependency array and only re-runs when that reference changes. The difference is rather than having to set a state variable within, `useMemo` returns a value.

```jsx
import { useMemo } from "react";

export default function useActiveUserCount(users) {
  const activeUserCount = useMemo(
    () => users.reduce((acc, user) => (user.active ? acc + 1 : acc), 0),
    [users]
  );

  return activeUserCount;
}
```
