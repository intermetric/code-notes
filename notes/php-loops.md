---
title: PHP loops
tags:
  - php
---

### For

```php
$odd_numbers = [1,3,5,7,9];
for ($i = 0; $i < count($odd_numbers); $i++) {
    $odd_number = $odd_numbers[$i];
    echo $odd_number . "\n";
}
```

### Foreach

```php
$odd_numbers = [1,3,5,7,9];
foreach ($odd_numbers as $odd_number) {
  echo $odd_number . "\n";
}
```

When iterating over arrays with keys, we can use the following syntax:

```php
$phone_numbers = [
  "Alex" => "415-235-8573",
  "Jessica" => "415-492-4856",
];

foreach ($phone_numbers as $name => $number) {
  echo "$name's number is $number.\n";
}
```