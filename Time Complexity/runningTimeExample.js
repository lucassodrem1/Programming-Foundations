function example(n) {
  let a = 5; // O(1)
  a++; // O(1)

  for (let i = 0; i < n; i++) { // O(n)
    // some statement
  }

  for (let i = 0; i < n; i++) { // O(n²)
    for (let j = 0; j < n; j++) {
      // some statement
    }
  }
}

// T(n) = O(1) + O(n) + O(n²)
// T(n) = O(n²)