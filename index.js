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

function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.random().toFixed(1) +
    ')'
  );
}

var color = random_rgba();

console.log(color);

let countryUppercase = countries.map((item) => item.toUpperCase());
console.log(countryUppercase);

let counLen = [];
for (let coun of countries) {
  counLen.push(coun.length);
}

console.log(counLen);

let counArray = [];
for (let coun of countries) {
  counArray.push([coun, coun.slice(0, 3).toUpperCase(), coun.length]);
}

console.log(counArray);

let substringArray = [];
let subString = 'land';
for (let subStr of countries) {
  if (subStr.indexOf(subString) !== -1) {
    substringArray.push(subStr);
  }
}

console.log(substringArray);

function findLongest(str) {
  let longStr = 0;
  let strVal;
  for (let i = 0; i < webTechs.length; i++) {
    if (webTechs[i].length > longStr) {
      longStr = webTechs[i].length;
      strVal = webTechs[i];
    }
  }

  console.log(strVal);
}

findLongest(webTechs);

for (let item of webTechs) {
  console.log(item);
}

var fruitsArray = ['banana', 'orange', 'mango', 'lemon'];

function customReverse(arr) {
  let leftP = 0;
  let rightP = arr.length - 1;

  while (leftP < rightP) {
    let temp = arr[leftP];
    arr[leftP] = arr[rightP];
    arr[rightP] = temp;

    leftP++;
    rightP--;
  }
}
customReverse(fruitsArray);
console.log(fruitsArray);
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB'],
];

let techUppercase = [].concat(...fullStack).map((item) => item.toUpperCase());
console.log(techUppercase);

let newCountry = [...countries];
console.log(newCountry);

let sortedCountries = newCountry.sort();
console.log(sortedCountries);
