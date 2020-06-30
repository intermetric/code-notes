---
title: JavaScript Best Practices
tags:
  - javascript
  - clean code
emoji: 👷
link: https://blog.bitsrc.io/javascript-best-practices-for-readable-and-maintainable-code-b54f0aca2353
---

### **Variables**

#### Meaningful Names

Make sure your variables are named meaningfully. This reduces the need for additional comments as your code speaks for itself.

```js
//BAD
const ddmmyyyy = new Date();
//GOOD
const date = new Date();
```

#### Searchable Variable Names

We spend more time reading code than we do writing code. That is why it’s important that it is readable and searchable. If you see a value and have no idea what it does or is supposed to do, that would be confusing on the reader’s end.

```js
//BAD
//Reader would have no clue on what 86400000 is.
setTimeout(randomFunction, 86400000);
//GOOD
// Declare them as capitalized named constants.
const MILLISECONDS_IN_A_DAY = 86_400_000;

setTimeout(blastOff, MILLISECONDS_IN_A_DAY);
```

#### Avoid Mental Mapping

Don't force people to memorize the variable context. Variables should be understood even when the reader has not managed to follow the whole history of how they came to be.

```js
// BAD
const names = ["John", "Jane", "Joseph"];
names.forEach(v => {
  doStuff();
  doSomethingExtra();
  // ...
  // ...
  // ...
  // What is this 'v' for?
  dispatch(v);
});
// GOOD
const names = ["John", "Jane", "Joseph"];
names.forEach(name => {
  doStuff();
  doSomethingExtra();
  // ...
  // ...
  // ...
  // 'name' makes sense now
  dispatch(name);
});
```

#### Do Not Add Unwanted Context

If your class or object name tells you what it is, do not include that in the variable name.

```js
// BAD
const Book = {
  bookName: "Programming with JavaScript",
  bookPublisher: "Penguin",
  bookColour: "Yellow"
};

function wrapBook(book) {
  book.bookColour = "Brown";
}
// GOOD
const Book = {
  name: "Programming with JavaScript",
  publisher: "Penguin",
  colour: "Yellow"
};

function wrapBook(book) {
  book.colour = "Brown";
}
```

#### Use Default Arguments

Instead of using the short-circuit approach, we provide default arguments to variables to end up with a much cleaner output.

```js
// BAD
function addEmployeeType(type) {
const employeeType = type || "intern";
//............
}
// GOOD
function addEmployeeType(type = "intern") {
//............
}
```

#### Use Strong Type Checks

Use === instead of ==. This would help you avoid all sorts of unnecessary problems later on. If not handled properly, it can dramatically affect the program logic.

```js
0 == false // true
0 === false // false
2 == "2" // true
2 === "2" // false
```

### **Functions**

#### Use Descriptive Names That Speak for Themselves

Considering functions that represent a certain behavior, a function name should be a verb or a phrase fully exposing the intent behind it as well as the intent of the arguments. Their name should say what they do.

```js
//BAD
function sMail(user) {
//........
}//GOOD
function sendEmail(emailAddress) {
//.........
}
```

#### Minimal Function Arguments

Ideally, you should avoid a long number of arguments. Limiting the number of function parameters would help it easier to test your function.

One or two arguments is the ideal case, and three should be avoided if possible. Anything more than that should be consolidated. Usually, if you have more than two arguments then your function is trying to do too much. In cases where it’s not, most of the time a higher-level object will suffice as an argument.

```js
//BAD
function createMenu(title, body, buttonText, cancellable) {
  // ...
}
createMenu("Foo", "Bar", "Baz", true);

//GOOD
function createMenu({ title, body, buttonText, cancellable }) {
  // ...
}
createMenu({
  title: "Foo",
  body: "Bar",
  buttonText: "Baz",
  cancellable: true
});
```

#### Functions Should Only Do One Thing

This is one of the most important rules in software engineering. When your function does more than one thing, it is harder to test, compose and reason about. When you isolate a function to just one action, it can be refactored easily and your code will read much much cleaner.

> Functions should do one thing. They should do it well. They should do it only. — Robert C. Martin (Uncle Bob)

```js
//BAD
function notifyListeners(listeners) {
  listeners.forEach(listener => {
    const listenerRecord = database.lookup(listener);
    if (listenerRecord.isActive()) {
      notify(listener);
    }
  });
}
//GOOD
function notifyActiveListeners(listeners) {
  listeners.filter(isListenerActive).forEach(notify);
}

function isListenerActive(listener) {
  const listenerRecord = database.lookup(listener);
  return listenerRecord.isActive();
}
```

#### Remove Duplicate Code

You should do your best to avoid code duplication. Writing the same code more than once is not only wasteful when writing it the first time but even more so when trying to maintain it. Instead of having one change affect all relevant modules, you have to find all duplicate modules and repeat that change.

Oftentimes duplication in code happens because two or more modules have slight differences that make it because you have two or more slightly different things that share much in common.

Small differences force you to have a very similar modules. Removing duplicate code means creating an abstraction that can handle this set of different things with just one function/module/class.

```js
//BAD
function showDeveloperList(developers) {
  developers.forEach(developer => {
    const expectedSalary = developer.calculateExpectedSalary();
    const experience = developer.getExperience();
    const githubLink = developer.getGithubLink();
    const data = {
      expectedSalary,
      experience,
      githubLink
    };

    render(data);
  });
}

function showManagerList(managers) {
  managers.forEach(manager => {
    const expectedSalary = manager.calculateExpectedSalary();
    const experience = manager.getExperience();
    const portfolio = manager.getMBAProjects();
    const data = {
      expectedSalary,
      experience,
      portfolio
    };

    render(data);
  });
}
//GOOD
function showEmployeeList(employees) {
  employees.forEach(employee => {
    const expectedSalary = employee.calculateExpectedSalary();
    const experience = employee.getExperience();

    const data = {
      expectedSalary,
      experience
    };

    switch (employee.type) {
      case "manager":
        data.portfolio = employee.getMBAProjects();
        break;
      case "developer":
        data.githubLink = employee.getGithubLink();
        break;
    }

    render(data);
  });
}
```

#### Do Not Pollute The Globals

Polluting globals is a bad practice in JavaScript because you could clash with another library and the user of your API would be none-the-wiser until they get an exception in production. For example, if you wanted to extend JavaScript’s native `Array` method to have a `diff` method that would show the difference between two arrays. You can write your method to `Array.prototype`, but it can clash with another library that had tried to call the same `diff` method to implement another feature.

This is why it would be much better to just use ES2015/ES6 classes and simply extend the `Array` global.

```js
//BAD
Array.prototype.diff = function diff(comparisonArray) {
  const hash = new Set(comparisonArray);
  return this.filter(elem => !hash.has(elem));
};
//GOOD
class SuperArray extends Array {
  diff(comparisonArray) {
    const hash = new Set(comparisonArray);
    return this.filter(elem => !hash.has(elem));
  }
}
```
