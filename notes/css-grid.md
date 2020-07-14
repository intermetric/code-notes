---
title: CSS Grid
emoji: 🍱
tags:
  - css
---

The following example creates a grid with a 40% column, three 1fr columns, and a 1fr column that won't shrink below 150px:

```css
grid-template-columns: 40% repeat(3, 1fr) minmax(150px, 1fr);
```

The following example creates a grid with a 100px row, three 1fr rows, and a 3fr row:

```css
grid-template-rows: 100px repeat(3, 1fr) 3fr;
```

`grid-auto-columns` and `grid-auto-rows` are very similar to `grid-template-columns` and `grid-template-rows`, but since they are targeting the implicitly-generated columns and rows, they only set size and not number.

```css
grid-auto-rows: 50px;

grid-auto-columns: 75%;
```

`grid-column` and `grid-row` are applied to the child elements and are used to size and position them within the grid. Both `grid-column` and `grid-row` take one or two values separated by a forward slash (/).

The first value (or only value, if only one is specified) sets the starting point of the element.

The second value sets the ending point of the element.

The `span` keyword and unitless positive number specify the number of columns or rows to span.

```css
grid-columns: span 3 / 5;

grid-row: 2 / -1 /* -1 is the last one */;
```

## Legacy support

```css
/* To select modern Grid browsers and IE 11 */
@supports (display: grid) {
  grid-gap: 20px;
}

/* Else */
@supports not (display: grid) {
  li {
    padding: 10px;
  }
}

/* Edge 16 and higher */
@supports (display: -ms-grid) and (display: grid) {
  div {
    width: auto;
  }
}

/* Edge 15 and lower */
@supports (display: -ms-grid) and (not (display: grid)) {
  div {
    margin: 0;
  }
}

// To select only Grid browsers without IE 11
@supports (grid-gap: 0) {
  grid-gap: 20px;
}
```
