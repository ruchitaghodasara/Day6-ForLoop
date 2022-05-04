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

let randomArr = [];
for (let i = 0; i < 5; i++) {
  randomArr.push(Math.random());
}

console.log(randomArr);
let r = (Math.random() + 1).toString(36).substring(6);
console.log(r);

function generateString(value) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  let resultString = '';
  const charLength = characters.length;
  for (let i = 0; i < value; i++) {
    resultString += characters.charAt(Math.floor(Math.random() * charLength));
  }
  return resultString;
}

generateString(5);

console.log((Math.random() * 1e32).toString(36));
var letters = '0123456789ABCDEF';

var color = '#';
for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
}

console.log(color);
