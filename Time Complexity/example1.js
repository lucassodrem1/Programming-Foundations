function firstIsPrime(number) {
  for (let i = 2; i < number; i++) { // O(n)
    if (number % i === 0) return false;
  }

  return true;
}

function secondIsPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) { // O(√2)
    if (number % i === 0) return false;
  }

  return true;
}
