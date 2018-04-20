export const rand = (max = 1000) => Math.floor(Math.random() * max);

export const compareArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((element, ind) => arr2[ind] === element);
};

export const isPrime = (num) => {
  const limit = num / 2;

  const iter = (i) => {
    if (i > limit) {
      return true;
    } else if (num % i === 0) {
      return false;
    }
    return iter(i + 1);
  };

  return iter(2);
};

export const gcd = (a, b) => {
  if (a === 0 || b === 0) {
    return a + b;
  } else if (a > b) {
    return gcd(a % b, b);
  }
  return gcd(a, b % a);
};
