---
title: React object literals
tags:
  - react
---

Object literals can help make our code more readable. Let’s say you want to show three types of users based on their role. You can’t use ternary because the number of options is greater than two.

```jsx
const { role } = user

const components = {
  ADMIN: AdminUser,
  EMPLOYEE: EmployeeUser,
  USER: NormalUser
};

const Component = components[role];

return <Component />;
```
