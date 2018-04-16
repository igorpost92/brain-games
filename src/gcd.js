const gcd = (a, b) => {
  if (a === 0 || b === 0) {
    return a + b;
  }

  if (a > b) {
    return gcd(a % b, b);
  }

  return gcd(a, b % a);
};

export default gcd;
