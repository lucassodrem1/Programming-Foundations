// Descending or returning time example. Here, the recursive function happens BEFORE the operation (print).
#include <stdio.h>

void fun(int n) {
  if (n > 0) {
    fun(n - 1);
    printf("N value: %d\n", n);
  }
}

int main() {
  int n = 3;

  fun(n);

  return 0;
}