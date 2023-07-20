function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const array = document.querySelector(".array");
const array1 = document.querySelector(".array1");
const array2 = document.querySelector(".array2");
const array3 = document.querySelector(".array3");
const array4 = document.querySelector(".array4");
const array5 = document.querySelector(".array5");

// 1 UZDUOTIS

function letters(x) {
  if (x === 0) return "A";
  if (x === 1) return "B";
  if (x === 2) return "C";
  if (x === 3) return "D";
}

let a = [];
let sumA = 0;
let sumB = 0;
let sumC = 0;
let sumD = 0;

for (let i = 0; i < 200; i++) {
  let ltr = letters(rand(0, 3));
  if (ltr === "A") sumA++;
  if (ltr === "B") sumB++;
  if (ltr === "C") sumC++;
  if (ltr === "D") sumD++;
  a.push(ltr);
}
console.log(a);
console.log("A: ", sumA);
console.log("B: ", sumB);
console.log("C: ", sumC);
console.log("D: ", sumD);
array.innerHTML =
  "Quantity of A : " +
  sumA +
  "   " +
  " - " +
  "Quantity of B : " +
  sumB +
  " " +
  " - " +
  "Quantity of C : " +
  sumC +
  " " +
  " - " +
  "Quantity of D : " +
  sumD;

// 2 UZDUOTIS

const b = [...a];

b.sort();
console.log(b);

// 3 UZDUOTIS

const arrayOne = [...a];
const arrayTwo = [];
const arrayThree = [];

function letters(x) {
  if (x === 0) return "A";
  if (x === 1) return "B";
  if (x === 2) return "C";
  if (x === 3) return "D";
}

for (let i = 0; i < 200; i++) {
  let ltr = letters(rand(0, 3));
  arrayTwo.push(ltr);
}

function letters(x) {
  if (x === 0) return "A";
  if (x === 1) return "B";
  if (x === 2) return "C";
  if (x === 3) return "D";
}

for (let i = 0; i < 200; i++) {
  let ltr = letters(rand(0, 3));
  arrayThree.push(ltr);
}
//console.log("First array: ",arrayOne);
//console.log("Second array: ",arrayTwo);
//console.log("Third array: ",arrayThree);

const allArrays = [];
for (let i = 0; i < 200; i++) {
  allArrays.push(arrayOne[i] + arrayTwo[i] + arrayThree[i]);
}
console.log("Summed array: ", allArrays);

let count = 0;
for (const i in arrayTwo) {
  const uniq = arrayOne[i] + arrayTwo[i] + arrayThree[i];

  allArrays[i] = uniq;

  if (uniq === "AAA") count++;
  if (uniq === "BBB") count++;
  if (uniq === "CCC") count++;
  if (uniq === "DDD") count++;
}

console.log("Unique combinations : ");
console.log("Unique value: ", count);
array1.innerHTML =
  "Unique value : " + count + " * * * * * " + "Unique combinations : ";

// 4 UZDUOTIS

let arrayD = [];
let arrayC = [];
for (let i = 0; i < 100; i++) {
  arrayD.push(rand(100, 999));
  arrayC.push(rand(100, 999));
}

function uniqueSet(length, min, max) {
  const uniqSet = new Set();
  while (uniqSet.size < length) {
    const randomNumber = rand(min, max);
    uniqSet.add(randomNumber);
  }
  return uniqSet;
}
function setToArray(set) {
  return Array.from(set);
}

const set1 = uniqueSet(100, 100, 999);
const set2 = uniqueSet(100, 100, 999);
const c = setToArray(set1);
const d = setToArray(set2);
const D = d.join(" , ");
const C = c.join(" , ");
array2.innerHTML = "Pirmas unikalus masyvas : " + C;
array3.innerHTML = "Antras unikalus masyvas : " + D;
console.log("Pirmas unikalus masyvas : ", c);
console.log("Antras unikalus masyvas : ", d);

// 5 UZDUOTIS

const firstArray = [...allArrays];
const secondArray = [];
for (const i in firstArray) {
  const uni = firstArray[i];
  if (uni === "AAA") secondArray.push(uni);
  if (uni === "BBB") secondArray.push(uni);
  if (uni === "CCC") secondArray.push(uni);
  if (uni === "DDD") secondArray.push(uni);
}
console.log("Antras masyvas is 5 uzduoties:", secondArray);
const rez = firstArray.filter((item) => !secondArray.includes(item));
const REZ = rez.join(" , ");
array4.innerHTML = "Answer to 5 uzduotis : " + REZ;

// 6 UZDUOTIS

const pirmas = [...c];
const antras = [...d];
const sameNumber = [];
for (let i = 0; i < 100; i++) {
  const same = pirmas[i];
  if (same === antras[i]) sameNumber.push(same);
}
console.log("6 Uzduoties masyvas: ", sameNumber);

// 7 UZDUOTIS

let five = [...c];
let six = [...d];
let itemIndex = [];

for (let i = 0; i < five.length; i++) {
  itemIndex[five[i]] = six[i];
}
console.log(itemIndex);
array5.innerHTML = "Mixed array from 7 UZDUOTIS : " + itemIndex;
