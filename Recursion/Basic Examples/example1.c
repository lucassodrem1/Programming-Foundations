// Ascending or calling time example. Here, the recursive function happens AFTER the operation (print).

#include <stdio.h>

void fun(int n) {
  if (n > 0) {
    printf("N value: %d\n", n);
    fun(n - 1);
  }
}

int main() {
  int n = 3;

  fun(n);

  return 0;
}

