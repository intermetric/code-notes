---
title: TypeScript basics
tags:
  - javascript
  - typescript
link: https://levelup.gitconnected.com/typescript-for-beginners-97b568d3e110
---

In TypeScript, we use primitive values in an interface to form a blueprint for an Object or Class:

```ts
interface Pizza {
    name: string;
    slices: number;
    toppings: string;
    price: number;
    cheesecrust: boolean;
    vegan?: boolean;
}
```

Optional properties are suffixed with a `?`. For example `propertyName?: string`.

Pizza object:

```ts
const pizza: Pizza {
    name: 'BBQ',
    slices: 6,
    toppings: 'Tomato sauce, BBQ sauce',
    price: 15,
    cheesecrust: true
}
```

If we want to have an array of strings or numbers to give our toppings or sizes, we can declare the type as `string[]` or `number[]`.

If we want to assign the `interface` to an array (with multiple pizza objects), we can do that the same way with `Pizza[]`:

```ts
const pizzas: Pizza[] = []
```

Let’s say we have 4 types of toppings and 5 sizes for our pizzas. We can define an `enum` for that.
The first option that is defined in the `enum` will have value 0 by default. But you can set other values if you like (prefer strings).

```ts
enum PizzaToppings {
    TOMATO, // value = 0
    BBQ, // value = 1
    NONE, // value = 2
    CREAM // value = 3
}

enum PizzaSizes {
    S = 's', // value = 's'
    M = 'm', // value = 'm'
    L = 'l', // value = 'l'
    XL = 'xl', // value = 'xl'
    XXL = 'xxl' // value = 'xxl'
}
```

In the interface:

```ts
interface Pizza {
    name: string;
    slices: number;
    toppings: PizzaToppings[];
    price: number;
    cheesecrust: boolean;
    sizes: PizzaSizes[];
    vegan?: boolean;
}
```

Instead of creating a normal `interface`, we can use a `class`, but we use the `interface` in the `constructor` to validate the data we put in the `class`.

Classes are handy because you can give your `class` methods, getters and setter which are not possible in an `interface`.

An `interface` won't be compiled into your JavaScript files, a `class` will be, because it's a valid data structure.

```ts
class Pizza {
    name: string = '';
    slices: number = 8;
    toppings: PizzaToppings[] = [];
    price: number = 0;
    cheesecrust: boolean = false;
    sizes: PizzaSizes[] = [];
    vegan?: boolean = false;

    constructor(data: Pizza) {
        this.name = data.name;
        this.slices = data.slices;
        this.toppings = data.toppings;
        this.price = data.price;
        this.cheesecrust = data.cheesecrust;
        this.sizes = data.sizes;

        if (data.vegan) {
            this.vegan = data.vegan;
        }
     }
}
```

A `class` is great for making new instances of a special type of `object`:

```ts
const pizza: Pizza = {
    name: 'Pizza BBQ',
    slices: 6,
    toppings: [PizzaToppings.TOMATO, PizzaToppings.BBQ],
    price: 15,
    cheesecrust: true,
    meat: true,
    sizes: [PizzaSizes.S, PizzaSizes.M, PizzaSizes.L, PizzaSizes.XL]
}

const bbqPizza = new Pizza(pizza)
```

 Let’s make a catalog of pizzas:

 ```ts
class PizzaCatalog {
  list: Pizza[] = [];

  constructor(list: Pizza[]) {
    this.list = list;
  }
}
 ```

Now we can make a list of pizzas with the `PizzaCatalog` class:

```ts
const pizzaCatalog = new PizzaCatalog([bbqPizza]);
```
