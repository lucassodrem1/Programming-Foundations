function example(bool, n) {
  if (bool === true) {
    for (let i = 0; i < n; i++) { // O(n)
      // some statements
    }
  } else {
    for (let i = 0; i < n; i++) { // O(n²)
      for (let j = 0; j < n; j++) {
        // some statements
      }
    }
  }
}

// T(n) = O(n²)