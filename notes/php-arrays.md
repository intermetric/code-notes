---
title: PHP arrays
tags:
  - php
---

To delete an item from an array, use the unset function on the member itself. For example:

```php
$odd_numbers = [1,3,5,7,9];
unset($odd_numbers[2]);
```

The count function returns the number of members an array has.

```php
$odd_numbers = [1,3,5,7,9];
echo count($odd_numbers);
```

The reset function gets the first member of the array. (It also resets the internal iteration pointer).

```php
$odd_numbers = [1,3,5,7,9];
$first_item = reset($odd_numbers);
echo $first_item;
```

The end function gets the last member of the array.

```php
$odd_numbers = [1,3,5,7,9];
$last_item = end($odd_numbers);
echo $last_item;
```

To push a member to the end of an array, use the array_push function:

```php
$numbers = [1,2,3];
array_push($numbers, 4); // now array is [1,2,3,4];
```

To pop a member from the end of an array, use the array_pop function:

```php
$numbers = [1,2,3,4];
array_pop($numbers); // now array is [1,2,3];
```

To push a member to the beginning of an array, use the array_unshift function:

```php
$numbers = [1,2,3];
array_unshift($numbers, 0); // now array is [0,1,2,3];
```

To pop a member from the beginning of an array, use the array_shift function:

```php
$numbers = [0,1,2,3];
array_shift($numbers); // now array is [1,2,3];
```

We can use the array_merge to concatenate between two arrays:

```php
$odd_numbers = [1,3,5,7,9];
$even_numbers = [2,4,6,8,10];
$all_numbers = array_merge($odd_numbers, $even_numbers)
```

We can use the sort function to sort arrays. The rsort function sorts arrays in reverse. Notice that sorting is done on the input array and does not return a new array.

```php
$numbers = [4,2,3,1,5];
sort($numbers);
```

The array_slice function returns a new array that contains a certain part of a specific array from an offset. For example, if we want to discard the first 3 elements of an array, we can do the following:

```php
$numbers = [1,2,3,4,5,6];
print_r(array_slice($numbers, 3));
```

We can also decide to take a slice of a specific length. For example, if we want to take only two items, we can add another argument to the function:

```php
$numbers = [1,2,3,4,5,6];
print_r(array_slice($numbers, 3, 2));
```

The array_splice function does exactly the same, however it will also remove the slice returned from the original array (in this case, the numbers variable).

```php
$numbers = [1,2,3,4,5,6];
print_r(array_splice($numbers, 3, 2));
```

A good example for using arrays with keys is a phone book. Let's say we want to save the phone numbers of people in a class.

```php
$phone_numbers = [
  "Alex" => "415-235-8573",
  "Jessica" => "415-492-4856",
];

echo "Alex's phone number is " . $phone_numbers["Alex"] . "\n";
echo "Jessica's phone number is " . $phone_numbers["Jessica"] . "\n";
```

To add an item to an array using a key, we use the brackets operator, as you would expect.

```php
$phone_numbers["Michael"] = "415-955-3857";
```

To check if a key exists within an array, we can use the array_key_exists function:

```php
$phone_numbers = [
  "Alex" => "415-235-8573",
  "Jessica" => "415-492-4856",
];

if (array_key_exists("Alex", $phone_numbers)) {
    echo "Alex's phone number is " . $phone_numbers["Alex"] . "\n";
} else {
    echo "Alex's phone number is not in the phone book!";
}

if (array_key_exists("Michael", $phone_numbers)) {
    echo "Michael's phone number is " . $phone_numbers["Michael"] . "\n";
} else {
    echo "Michael's phone number is not in the phone book!";
}
```

If we want to extract only the keys of the array (the names), we can use the array_keys function.

```php
print_r(array_keys($phone_numbers));
```

Alternatively, to get only the values of an array (the phone numbers), we can use the array_values function.

```php
print_r(array_values($phone_numbers));
```

We can join arrays to form strings, or split strings to arrays of strings.

For example, to split a string with a list of fruits separated by a comma, we use the explode function:

```php
$fruits = "apple,banana,orange";
$fruit_list = explode(",", $fruits);
```

To join back an array to a single string separated with commas, we use the implode function:

```php
$fruit_list = ["apple","banana","orange"];
$fruits = implode(",", $fruit_list);
```
