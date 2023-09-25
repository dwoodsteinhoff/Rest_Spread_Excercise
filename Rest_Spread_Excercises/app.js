// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

//ES2015 Version

const filterOutOdds = (...args) => args.filter((num) => {return num % 2 === 0});

//findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

const findMin = (...args) => Math.min(...args)

//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

//mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const mergeObjects = (object1, object2,) => ({...object1,...object2,}); 

//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

const doubleAndReturnArgs = (arr, ...args) => ([arr, ...args.map((num) => {return num *2})])

//********/
// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
// Make sure that you are always returning a new array or object and not modifying the existing inputs.
//********/

/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {

// }

const removeRandomItems = (itemsArr) => {
    let randomItem= Math.floor(Math.random() * itemsArr.length);
    return [...items.slice(0, randomItem), ...items.slice(randomItem + 1)];
}


/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {

// }

const extend = (array1, array2) => ([...array1, ...array2]);


/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {

// }

const addKeyVal = (obj, theKey, val) => ({...obj, [theKey] : val})
//i had just the "theKey" - looked at answer to add the brackets. did not realize i needed them and was very confused. I see it is something in next lesson.


/** Return a new object with a key removed. */

// function removeKey(obj, key) {

// }

const removeKey = (obj, key) => {
    ({[key]:undefined, ...obj} = obj);
    return obj
}
//also used answer but attempted based off previous expression but was missing a few steps.

/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {

// }

const combine = (object1, object2) => ({...object1, ...object2});

/** Return a new object with a modified key and value. */

// function update(obj, key, val) {

// }

const update = (obj, theKey, val) => ({...obj, [theKey] : val})