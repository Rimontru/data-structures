import { log } from "node:console";
import assert from "node:assert/strict";

const solution = (x) => {
  // We'll check if number is less than zero
  if (x < 0) return false;

  let original = x; // control of bucle
  let reversed = 0; // store numbers in reversed
  while (original > 0) {
    // We'll use the modulo operator to get the last digit of the original numbers
    // original % 10 = 121 % 10 = 1 // last digit
    const last_digit = original % 10;
    // We'll displace the reversed number to the left
    // reversed * 10 = 0 * 10 = 0
    const displaced = reversed * 10;
    // We'll add the last digit to the reversed number
    // The last digit of the original numbers will be the first digit of the reversed numbers
    // reversed = 0 + 1 = 1
    reversed = displaced + last_digit;
    // We'll remove the last digit of the original number and store it in the reversed number
    // We'll update the original numbers until the original number is equal to 0
    // Convert to decimal and will be removed: 123 / 10 = 12.3
    const separe_last_digit = original / 10;
    // Math.floor(12.3) = 12 (remove the decimal part)
    const remove_last_decimal = Math.floor(separe_last_digit);
    // Update the original number until it is equal to 0
    original = remove_last_decimal;
  }

  // Compare the reversed number with the origin
  return x === reversed;
};

// log(solution(12321));

// Testings using assert native

assert.deepStrictEqual(solution(10), false, "Test 1");
assert.deepStrictEqual(solution(-121), false, "Test 2");
assert.deepStrictEqual(solution(121), true, "Test 3");

// Pares
const findEvenNumbers = (length) => {
  // is Even function
  function isEven(value) {
    return value % 2 === 0 ?? value;
  }

  const evenNums = [...Array.from({ length }).keys()]
    .map((val) => val + 1) // we mutate original value for begin at 1
    .filter(isEven);
  return evenNums;
};
//log("Even Numbers", findEvenNumbers(11));

// Impares
const findOddNumbers = (length) => {
  // is Odd function
  const isOdd = (value) => {
    return value % 2 === 1 ?? value;
  };

  const oddNums = [...Array.from({ length }).keys()]
    .map((val) => val + 1) // we mutate original value for begin at 1
    .filter(isOdd);
  return oddNums;
};

//log("Odd Numbers", findOddNumbers(11));

// Numbers Prime
function makePrimes(n) {
  // Si n es menor que 2, no hay números primos
  if (n < 2) return [];

  // Inicializamos un array de booleanos para marcar los números primos
  let esPrimo = new Array(n + 1).fill(true);
  esPrimo[0] = esPrimo[1] = false; // 0 y 1 no son primos
  // Aplicamos la Criba de Eratóstenes
  for (let p = 2; p * p <= n; p++) {
    log(p);
    if (esPrimo[p]) {
      // Marcamos como no primos los múltiplos de p
      // i = 4 = 2 * 2, 6 = 2 * 3, 8 = 2 * 4, 10 = 2 * 5
      // i = 9 = 3 * 3

      for (let i = p * p; i <= n; i += p) {
        //log(i);
        esPrimo[i] = false;
      }
    }
  }

  // Filtramos los números que siguen marcados como primos
  let primos = [];
  for (let i = 2; i <= n; i++) {
    if (esPrimo[i]) {
      primos.push(i);
    }
  }

  return primos;
}

// Ejemplos de uso
log(makePrimes(10)); // [2, 3, 5, 7]
//console.log(generarPrimos(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
//console.log(generarPrimos(30)); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
