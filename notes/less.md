---
title: LESS
tags:
  - css
  - less
---

### Variables

```less
@link-color: #428bca;
@link-color-hover: darken(@link-color, 10%);

// Usage
a,
.link {
  color: @link-color;
}
a:hover {
  color: @link-color-hover;
}
.widget {
  color: #fff;
  background: @link-color;
}
```

### Variable interpolation

```less
@my-selector: banner;

// Usage
.@{my-selector} {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}
```

### Variable variables

```less
@primary:  green;
@secondary: blue;

.section {
  @color: primary;

  .element {
    color: @@color;
  }
}
```

### Properties as variables

```less
.widget {
  color: #efefef;
  background-color: $color;
}
```

Compiles to:

```css
.widget {
  color: #efefef;
  background-color: #efefef;
}
```
