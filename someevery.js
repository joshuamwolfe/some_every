console.log('Current fille: someevery.js');

//declare variables
const words = [
	'immunoelectrophoretically',
	'rotavator',
	'tsktsk',
	'psychophysicotherapeutics',
	'squirrelled',
	'crypt',
	'uncopyrightable',
	'cysts',
	'pseudopseudohypoparathyroidism',
	'unimaginatively'
];

const numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
]

const evenNumbers = [
  2,
  4,
  6,
  8,
  10
]

const oddNumbers = [
  1,
  3,
  5,
  7,
  9,
]

const duplicateNumbers = [
  1,
  2,
  3,
  5,
  5,
  5,
  5,
]

//practice some (nonmeth0d)
let mySome = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(arr[i], i, arr)) return true;
  }
  return false; 
}

//practice every (nonmethod)
let myEvery = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(arr[i], i, arr)) return false;
  }
  return true; 
}

//hasOddNumber
//Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.
function hasOddNumber(array) {
  return array.some(function (value) {
    let currentValue = value % 2;
    if (currentValue !== 0) {
      return true;
    } else {
      return false;
    }      
  })
};
console.log('hasOddNumber: ' + hasOddNumber(oddNumbers));

//hasAZero
//Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false
function hasAZero(number) {
  return number.toString().split('').some(function(val){
    return val === '0';
  })
};
console.log('hasAZero: ' + hasAZero(10));

//hasOnlyOddNumbers
//Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false.
function hasOnlyOddNumbers(array) {
  return array.every(function (value) {
    return value % 2 !== 0
  })
};
console.log('hasOnlyOddNumbers: ' + hasOnlyOddNumbers(oddNumbers));

//hasNoDuplicates
//Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.
function hasNoDuplicates(array) {
  return array.every(function(value) {
    return array.indexOf(value) === array.lastIndexOf(value);
  })
};
console.log('hasNoDuplicates: ' + hasNoDuplicates(numbers));

//hasCertainKey
//Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.
function hasCertainKey(arr, key){
  return arr.every(function(val){
    return key in val
  })
}
console.log('hasCertainKey: ' + hasCertainKey([
  {name: "Colt", admin: true},
  {name: "Poppy", admin: false}
], name));

//hasCertainValue
//Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.
function hasCertainValue(arr, key, searchValue){
  return arr.every(function(val){
    return val[key] === searchValue;
  })
}
console.log('hasCertainValue: ' + hasCertainValue(numbers));