# Time Complexity Analysis

**_Time complexity of a program is a simple measurement of how fast the time taken by a program to grows, if the input size increases._**

## Why should we care?

See the [example](./example1.js).

In this example, we are trying to indentify if a number is prime or not.
A prime number is a number that can be divided by **_exactly_** two numbers: 1 and the number itself.

The first function has a time complexity of **_O(n)_**, while the first function has a time complexity of **_(O(√2)_**

Let's assume that the variable **_number_** will be a large number: 10<sup>10</sup>+19.

The first function will take close to 10<sup>7</sup> seconds, converting it to days, the result is: 115 days. So the first function will take 115 days to indentify if a number is prime or not in the worst case scenario.

The second function will take 100 seconds, converting it to minutes, the result is: 1.66 minutes. So the second function will take 1.66 days to solve the problem in the worst case scenario.

So, in this example, if our input size is small, the two functions don't have a significant difference, but as the input size increases, the difference running time complexity of the two functions becomes really substantial.

## We analize time complexity for:

### a) Very large input-size

### b) Worst case scenario

## General Rules

### a) Drop lower order terms.

Example:

```
T(n) = n³ + 3n² + 4n + 2
T(n) = n³
O(n) = n³
```

The final result of **T(n)** is n³, because in very large input sizes, the lower order terms **_(3n² + 4n + 2)_** will become insignificant, in comparasion to the **_n³_**. So this function will be **_O(n³)_**.

### b) Drop constant multiplier

Example 1:

```
T(n) = 17n<sup>4</sup> + 3n³ + 4n + 8
T(n) = 17n<sup>4</sup>
T(n) = n<sup>4</sup>
O(n) = n<sup>4</sup>
```

In the example 1, we first drop the lower order terms, then we drop the consntant, because in very large input sizes, constants will become insignificant too. Thus, the result is **_O(n<sup>4</sup>)_**.

Example 2:

```
T(n) = 16n + log(n)
T(n) = 16n
T(n) = n
O(n) = n
```

In the example 2, **_log(n)_** is the lower term, so we remove it, then drop the constant. Thus, the result is **_O(n)_**.

### c) Running time = Σ running time of all fragments

We can calculate the running time of the algorithm, by summing up the running time of the fragments in the program.
See the [example](./runningTimeExample.js).
Summing up all the fragments of the function, we will have: **_T(n) = 0(1) + O(n) + O(n²)_**, so, the result will be: **_T(n) = O(n²)_**.

### d) Conditional Statements

Pick the complexity of the condition which is the worst case.

See this [example](./worstCaseExample.js).

If bool is equal to true, we will have a time complexity of n. If bool is equal to false, we will have a time complexity of n². So, the time complexity of the function will be **_T(n) = O(n²)_**, because that's how it is in the **_worst case_** scenario.
