# Recursion

**_Recursion or recursive functions are functions that call itself._**

## General Rules

1. Recursive functions need to have a conditional statement, otherwise, the function will be an infinite loop.

See this [example](./Basic%20Examples/infinityLoop.c).

This code will be running infinitely, because the **fun n** doesn't have a conditional statement to break it.

2. Recursive functions have a calling time (ascending) and a returning time (descending).

### Ascending Recursive Function

See this [example](./Basic%20Examples/example1.c).

In our recursive function (**fun n**), we do, first, the operation (print), then, we do the recursive call.

### Descending Recursive Function

See this [example](./Basic%20Examples/example2.c).

In our recursive function (**fun n**), we do, first, the recursive action, then, we do the operation (print).

Didn't understand? Don't worry!

To understand how a recursive function works, we can **trace the recursive function**.

But, how to trace a recursive function?

Recursive functions are traced in the form of a tree.

### Tracing a Recursive Function

[Ascending](./images/Ascending.png)

Notice that, the output will be: 3, 2, 1, because the operation always occurs first the recursive call, therefore, it's an ascending recursive function.
Because, the output will be finished at the calling time.

[Descending](./images/Descending.png)

Now, notice that, the output will be: 1, 2, 3. Why? In this descending example, we do the recursive call **before**, and then, the operation.
Therefore, the function will call itself ultil the end of the calling time. Step 1.

Then, on the returning time, the operation will be done. Printing: 1, 2 and 3, in this order.

The output will be finished at the returning time, so this is a descending recursive function.

3. The main difference between recursive function and loops, is that, while loops only do the ascending path (calling time), recursive functions do the ascending path and then, the descending path (returning time).
