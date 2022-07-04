#include <stdio.h>

void fun(int n) {
  printf("N value: %d\n", n);
  fun(n - 1);
}

int main() {
  int n = 3;

  fun(n);

  return 0;
}