const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}
let resultE = [],
  resultO = [];
for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    resultE.push(i);
  }
}
for (let i = 0; i < 100; i++) {
  if (i % 2 !== 0) {
    resultO.push(i);
  }
}
console.log(resultE);
console.log(resultO);
function isPrime(num) {
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return num;
}
let result = [];
for (let i = 0; i < 100; i++) {
  if (isPrime(i)) {
    result.push(i);
  }
}
console.log(result);
