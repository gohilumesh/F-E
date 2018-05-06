#Front-end Interview Questions


## Javascript question
Question 1. Check if object is empty or not.
```
function isEmpty(TEMP_OBJECT) {
  return Object.keys(TEMP_OBJECT).length === 0 && TEMP_OBJECT.constructor === Object;
}
```
[more options](http://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object)

Question 1.1 Check it is object or not
```
function isObject(obj) {
  return (typeof obj === "object" && !Array.isArray(obj) && obj !== null);
}
```
[more info](http://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript)

Question 2. Given and object and property path. Get value from property path
```
function getPropertyValue(TEMP_OBJECT, path) {
  return path.split('.').reduce((prev, key) => {
      return prev ? prev[key] : undefined;
    }, TEMP_OBJECT)
}

//Input :
let srcObject = {
    'system' : {
        'database' : {
              '0' : {
                'host' : '54.232.122',
                'port' : 3306
             },
              '1' : {
                'host' : '54.232.123',
             },
             'port' : 3307
              '2' : {
                'host' : '54.232.123',
             }
       }
   }
},
path = "system.database.1.port";

//Output: 3307
```
[more options](http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key)

Question 3. How to filter object from Arrays of Objects
```
let filteredArray = [{name: 'john'},{name: 'kelly'}].filter(value => value.name === 'kelly');

Filter method return Array of objects
```

Question 4. How to replace all the occurrences of string
```
  str = str.replace(/test/g, '')
```
[more options](http://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript?rq=1)

Question 5. write a script that returns the number of occurrences of character given a string as input
```
function countCharacters(str) {
  return str.replace(/ /g, '').toLowerCase().split('').reduce((p, c) => {
    if (c in p) {
      p[c]++;
    } else {
      p[c] = 1;
    }
    return p;
  }, {});
}
console.log(countCharacters("the brown fox jumps over the lazy dog"));
```

Question 6. write a script that return the number of occurrences of a character in paragraph

```
function charCount(str, searchChar) {
  let count = 0;
  if (str) {
    let stripStr = str.replace(/ /g, "").toLowerCase(); //remove spaces and covert to lowercase
    for (let chr of stripStr) {
      if (chr === searchChar) {
        count++;
      }
    }
  }
  return count;
}
console.log(charCount('the brown fox jumps over the lazy dog', 'o'));
```
Question 7. Recursive and non-recursive Factorial function

```
function recursiveFactorial(n) {
  if (n < 1) {
    throw Error("Value of N has to be greater then 1");
  }
  if (n === 1) {
    return 1;
  } else {
    return n * recursiveFactorial(n -1);
  }
}

console.log(recursiveFactorial(5));

function factorial(n) {
  if (n < 1) {
    throw Error("Value of N has to be greater then 1");
  }
  if (n === 1) {
    return 1
  }
  let result = 1;
  for (let i=1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5));

```

Question 8. Recursive and non recursive fibonacci-sequence
```
// 1, 1, 2, 3, 5, 8, 13, 21, 34

function recursiveFibonacci(num) {
  if(num <= 1) {
        return 1;
    } else {
        return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
    }
}

console.log(recursiveFibonacci(8));

function fibonnaci(num) {
  let a = 1, b = 0, temp;
  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
}

console.log(fibonnaci(7));

// Memoization fibonnaci

function fibonnaci(num, memo = {}) {
  if (num in memo) { return memo[num]; };
  if (num <= 1) { return 1; }
  return memo[num] = fibonnaci(num - 1, memo) + fibonnaci(num - 2, memo);
}

console.log(fibonnaci(5)) // 8
```
[More info](https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e#.m9ms009bh)

Question 9: Random Number between min and max
```
// 5 to 7
let min = 5;
let max = 7;
console.log(min + Math.floor(Math.random() * (max-min+1)));
```

Question 10: Get HTML form values as JSON object
```
  // Use the array reduce function with form elements.
  const formToJSON = elements => [].reduce.call(elements, (data, element) => {
    data[element.name] = element.value;
    // Check if name and value exist on element
    // Check if it checkbox or radio button which can select multiple or single
    //check for multiple select options
    return data;
  }, {});

  // pass the elements to above method, to get values
  document.querySelector('HTML_FORM_CLASS').elements  
```
[More info](https://code.lengstorf.com/get-form-values-as-json/)

Question 11: Reverse the number
```
function reverse(num) {
  let result = 0;
  while( num != 0 ) {
     result = result * 10;
     result = result + num % 10;
     num = Math.floor( num / 10 );   
  }
  return result;
}

console.log(reverse(12345));
```

Question 12: Remove Duplicate elements from Array
```
var ar = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
function removeDuplicate() {
  return ar.reduce((prev, current) => {
    //Cannot use includes of array, since it is not supported by many browser
    if (prev.indexOf(current) === -1){
      prev.push(current);
    }
    return prev;
  }, []);
}

console.log(removeDuplicate(ar));
```

Question 13: Deep copy of object or clone of object
```
function deepExtend(out = {}) {
  for (let i = 1; i < arguments.length; i++) {
    let obj = arguments[i];
    if (obj == null) // skip undefined and null [check with double equal not triple]
      continue;

    obj = Object(obj);

    for (let key in obj) {
      // avoid shadow hasownproperty of parent
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] != null)
          out[key] = deepExtend(out[key], obj[key]);
        else
          out[key] = obj[key];
      }
    }
  }
  return out;
};

//Alternative if there are no function
let cloneObj = JSON.parse(JSON.stringify(obj));

console.log(deepExtend({}, {a:1, b:{c:2, d:3}}, {e:4, b:{f:1}}));
//output : { a: 1, b: {c: 2, d: 3, f: 1}, e: 4 }
```
[more info](http://youmightnotneedjquery.com/)

Question 14: Sort ticket based on flying order.
```
"use strict";

function SortTickets(tickets) {
  this.tickets = tickets;

  // reverse the order of tickets
  this.reverseTickets = {};
  for (let key in this.tickets) {
    this.reverseTickets[tickets[key]] = key;
  }

  // Get the starting point of ticket
  let orderedTivckets =[...this.getStartingPoint()];

  // Get the ticket destination.
  let currentValue = orderedTickets[orderedTickets.length -1];
  while(currentValue)  {
    currentValue = this.tickets[currentValue];
    if (currentValue) {
      orderedTickets.push(currentValue);
    }
  }
  console.log(orderedTickets);
}

SortTickets.prototype.getStartingPoint = function() {
  for (let tick in this.tickets) {
    if (!(tick in this.reverseTickets)) {
      return [tick,  this.tickets[tick]];
    }
  }
  return null;
}

new SortTickets({
  Athens: "Rio",
  Barcelona: "Athens",
  London: "NYC",
  ND: "Lahore",
  NYC: "Barcelona",
  Rio: "ND"
});
```

Question 15: Cuncurrent execute function based on input number
```
function concurrent(num) {
  this.queue = [];
  this.num = num;
}

concurrent.prototype.enqueue = function(value) {
  this.queue.push(value);
};

concurrent.prototype.start = function() {
  this.runningCount = 0;
  while(this.queue.length > 0) {
    if (this.runningCount < this.num) {  
      this.queue.pop().call(this, () => {
        this.runningCount--;
        let count = this.runningCount;
        if (count === 0) {
          this.start();
        }
      });
      this.runningCount++;
    }
  }
};

let callback = (done) => {
  console.log('starting');
  setTimeout(() => {
    console.log('stopped');
    done();
  }, 200);
}

let c = new concurrent(2);
c.enqueue(callback);
c.enqueue(callback);
c.enqueue(callback);
c.enqueue(callback);
c.enqueue(callback);
c.enqueue(callback);
c.start();
```

Question 16: Reversing an array
```
let a = [1,2,3,4,5];

//Approach 1:
console.log(a.reverse());

//Approach 2:
let reverse = a.reduce((prev, current) => {
  prev.unshift(current);
  return prev;
}, []);

console.log(reverse);
```

Question 17: Rotate 2D array
```
const transpose = arr => arr[0].map((col, i) => arr.map(row => row[i]));

console.log(transpose([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]));
```

Question 18: Get Column from 2D Array
```
const getColumn = (arr, n) => arr.map(x => x[n]);

const twoDimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(getColumn(twoDimensionalArray, 1));   //Result = [2,5,8]
```
Question 19: Get top N from array
```
function topN(arr, num) {
  let sorted = arr.sort((a, b) => a - b);
  return sorted.slice(sorted.length - num, sorted.length);
}

console.log(topN([1,8,3,4,5], 2));  // [5,8]
```

Question 20: Get query params from Object
```
function getQueryParams(obj) {
  let parms = '';
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (parms.length > 0) {
        parms +='&';
      }
      parms += encodeURI(`${key}=${obj[key]}`);
    }
  }
  return parms;
}

console.log(getQueryParams({
  name: 'Umesh',
  tel: '48289',
  add: '3333 emearld st'
}));
```
Question 21: Recursively Travesing DOM [Link] (http://www.javascriptcookbook.com/article/Traversing-DOM-subtrees-with-a-recursive-walk-the-DOM-function/)

Question 22: Consecutive 1's in binary
```
function consecutiveOne(num)  {
  let binaryArray = num.toString(2);

  let maxOccurence = 0,
      occurence = 0;
  for (let val of binaryArray) {
    if (val === '1') {
      occurence += 1;
      maxOccurence = Math.max(maxOccurence, occurence);
    } else {
      occurence = 0;
    }
  }
  return maxOccurence;
}
//13 = 1101 = 2
//5 = 101 = 1
console.log(consecutiveOne(5));  //1
```
Question 23: Spiral travesal of matrix
```
var input = [[1,  2,   3,  4],
             [5,  6,   7,  8],
             [9,  10, 11, 12],
             [13, 14, 15, 16]];

var spiralTraversal = function(matriks){
  let result = [];
    var goAround = function(matrix) {
        if (matrix.length === 0) {
            return;
        }

        // right
        result = result.concat(matrix.shift());

        // down
        for (var j=0; j < matrix.length - 1; j++) {
            result.push(matrix[j].pop());
        }

        // bottom
        result = result.concat(matrix.pop().reverse());

        // up
        for (var k=matrix.length-1; k > 0; k--) {
            result.push(matrix[k].shift());
        }

        return goAround(matrix);
    };

    goAround(matriks);

    return result;
};
console.log(spiralTraversal(input)); // [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
```
Question 24: Merge Sorted array and sort it.
```
function mergeSortedArray(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))].sort((a, b) => a - b);
}

console.log(mergeSortedArray([1,2,3,4,5,6], [0, 3,4,7])); // [0, 1, 2, 3, 4, 5, 6, 7]
```

Question 25: Anagram of words
```
const alphabetize = word => word.split('').sort().join('');

function groupAnagram(wordsArr) {
 return wordsArr.reduce((p, c)=> {
   const sortedWord = alphabetize(c);
   if (sortedWord in p){
     p[sortedWord].push(c);
   } else {
     p[sortedWord] = [c];
   }
   return p;
 }, {});
}

console.log(groupAnagram(['map', 'art', 'how', 'rat', 'tar', 'who', 'pam', 'shoop']));
// result : {
//  amp: ["map", "pam"],
//  art: ["art", "rat", "tar"],
//  hoops: ["shoop"],
//  how: ["how", "who"]
// }
```
Question 26: Print the largest (maximum) hourglass sum found in 2d array.
```
// if arr 6 X 6 then iterate it till 4 X 4  [reduce by two]
// if arr 8 X 8 then iterate it till 6 X 6  [reduce by two]
function main(arr) {
    let maxScore = -999;
    let len = arr.length;
    for (let i =0; i< len - 2; i++){
        for (let j =0; j< len - 2; j++){
            let total = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]  +arr[i+1][j + 1]+ arr[i+2][j] + arr[i+2][j +1] + arr[i+2][j + 2];

            maxScore = Math.max(maxScore, total)
        }
    }
    console.log(maxScore);
}
```
Question 27:  Transform array of object to array
```
let data = [ {"vid":"aaa", "san":12},
            {"vid":"aaa", "san":18},
            {"vid":"aaa", "san":2},
            {"vid":"bbb", "san":33},
            {"vid":"bbb", "san":44},
            {"vid":"aaa", "san":100}];

let newData = data.reduce((acc, item) => {
  acc[item.vid] = acc[item.vid] || {vid: item.vid, san: []};
  acc[item.vid]["san"].push(item.san);
  return acc;  
}, {});

console.log(Object.keys(newData).map(key => newData[key]));

// Result
// [[object Object] {
//   san: [12, 18, 2, 100],
//   vid: "aaa"
// }, [object Object] {
//   san: [33, 44],
//   vid: "bbb"
// }]
```
Question 28: Create a private variable or private method in object
```
let obj = function() {
  function getPrivateFunction() {
    console.log('this is private function');
  }
  let p = 'You are accessing private variable';
  return {
    getPrivateProperty: () => {
       console.log(p);
    },
    callPrivateFunction: getPrivateFunction
  };
}();


obj.getPrivateValue(); // You are accessing private variable
console.log('p' in obj);  // false
obj.callPrivateFunction(); // this is private function
```
Question 29: Flatten only Array not objects
```
function flatten(arr, result =[]) {
  arr.forEach(val => {
    if (Array.isArray(val)) {
      flatten(val, result);
    } else {
      result.push(val);
    }
  });
  return result;
}

let input = [1, {a: [2, [3]]}, 4, [5,[6]], [[7, ['hi']], 8, 9], 10];
console.log(flatten(input)); // [1, { a: [2, [3]]}, 4, 5, 6, 7, "hi", 8, 9, 10]

function flattenIterative(out) {  // iteratively  
  let result = out;
  while(result.some(Array.isArray)) {
    result = [].concat.apply([], result);
  }
  return result;
}
var list1 = [[0, 1], [2, 3], [4, 5]];
console.log(flattenIterative(list1));  // [0, 1, 2, 3, 4, 5]

function flattenIterative1(arr) {
  let current = arr;
  let rest = [];
  let result = [];
  while(current.length > 0) {
    let firstValue = current.shift();

    if (Array.isArray(firstValue)) {      
      current = firstValue.concat(current);
    } else {
      result.push(firstValue);
    }
  }
  return result;
}

let input = [1, {a: [2, [3]]}, 4, [5,[6]], [[7, ['hi']], 8, 9], 10];
console.log(flattenIterative1(input));
var list2 = [0, [1, [2, [3, [4, [5]]]]]];
console.log(flattenIterative1(list2));  // [0, 1, 2, 3, 4, 5]
```
Question 30: Find max difference between two number in Array
```
function maxDifference(arr) {
  let maxDiff = 0;

  for (let i=0; i< arr.length; i++) {
    for (let j= i+1; j < arr.length; j++) {
      let diff = Math.abs(arr[i] - arr[j]);
      maxDiff = Math.max(maxDiff, diff);
    }
  }
  return maxDiff;
}

console.log(maxDifference([1,2,4]));  // [1 - 4 ] = 3
```
Question 31: swap two number in ES6 [destructing]
```
let a = 10, b = 5;
[a,b] = [b,a];
```

Question 32: Panagram ? it means all the 26 letters of alphabet are there
```
function panagram(input) {
  if (input == null) {  // Check for null and undefined
    return false
  }

  if (input.length < 26) { // if length is less then 26 then it is not
    return false;
  }
  input = input.replace(/ /g, '').toLowerCase().split('');
  let obj = input.reduce((prev, current) => {
    if (!(current in prev)) {
      prev[current] = current;
    }
    return prev;
  }, {});
  console.log(Object.keys(obj).length === 26 ? "panagram": "not pangram");
}
processData('We promptly judged antique ivory buckles for the next prize'); // pangram
processData('We promptly judged antique ivory buckles for the prize'); // Not Pangram

```
Question 34: Given two identical DOM trees (not the same one), and a node from one of them find the node in the other one.
```
function indexOf(arrLike, target) {
    return Array.prototype.indexOf.call(arrLike, target);
}

// Given a node and a tree, extract the nodes path
function getPath(root, target) {
    var current = target;
    var path = [];
    while(current !== root) {
        let parentNode = current.parentNode;
        path.unshift(indexOf(parentNode.childNodes, current));
        current = parentNode;
    }
    return path;
}

// Given a tree and a path, let's locate a node
function locateNodeFromPath(node, path) {
    return path.reduce((root, index) => root.childNodes[index], node);
}

const rootA = document.querySelector('#root-a');
const rootB = document.querySelector('#root-b');
const target = rootA.querySelector('.person__age');

console.log(locateNodeFromPath(rootB, getPath(rootA, target)));
```
Question 35: Convert a number into a Roman Numeral
```
function romanize(num) {
  let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
      roman = '';
  for ( let i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

console.log(romanize(3)); // III
```
Question 36: check if parenthesis is malformed or not
```
function matchParenthesis(str) {
  let obj = {'{': '}', '(': ')', '[':']'};
  let result = [];
  for (let s of str) {
    if (s === '{' || s === '(' || s === '[') { // All opening brackets
      result.push(s);
    } else {
      if (result.length > 0) {
        let lastValue = result.pop(); //pop the last value and compare with key
        if (obj[lastValue] !== s) { // if it is not same then it is not formated properly
          return false;
        }
      } else {
        return false;  // empty array, there is nothing to pop. so it is not formated properly
      }
    }
  }
  return result.length === 0;
}

console.log(matchParenthesis('}{{}}'), matchParenthesis('{{[]}}')); // false - true  
```
Question 37: shuffling an array in place. (Fisher-Yates shuffle)
[click for more info](https://www.frankmitchell.org/2015/01/fisher-yates/)

Question 38: Create Custom Event Emitter class
```
function EventEmitter() {
  this.list = {};
}

EventEmitter.prototype.on = function(name, callback) {
  this.list[name] = callback;
}

EventEmitter.prototype.emit = function(name, ...args) {
  let c = this.list[name];
  c.call(null, args);
}

let e = new EventEmitter();

e.on('callme', function(args) {
  console.log(`you called me ${args}`);
});

e.emit('callme', ['a','b'], {firstName: 'umesh', lastName: 'gohil'});
```
Question 39: Max value from an array
```
const arr = [-2, -3, 4, 3, 2, 1];
Math.max(...arr);   // Fastest

Math.max.apply(Math, arr); // Slow
```
Question 40: DOM methods
```
var el = document.querySelector('div');
el.childNodes;   // get the list of child nodes of el
el.firstChild;   // get the first child node of el
el.lastChild;    // get the last child node of el
el.parentNode;   // get the parent node of el
el.previousSibling;    // get the previous sibling of el
el.nextSibling;  // get the next sibling of el
el.textContent;  // get the text content of el
el.innerHTML;    // get the inner html of el

document.createElement('div')  // create dom element
document.creatTextNode('Hello world');  // create text node
document.createDocumentFragment();

el.appendChild(); //append child to el;
el.insertBefore(); // insert child before el;
el.parentNode.replaceChild(NEW_NODE, REPLACE_ME)  // replace the node
el.removechild();  // remove the child node

Array.from(NODES) // convert nodelist to regular array

el.classList[contains | add | remove | replace]  // class of el

el.setAttribute | el.getAttribute | el.removeAttribute // attributes of el

el.style    // get the style of el
```
Question 41: search function called after 500 ms
```
<input type="text" class="search" />

let timer = null;
function searchOptions(value){
  clearTimeout(timer);
  timer = setTimeout(() => {
    console.log(`value is - ${value}`)
  }, 500);
}

let search= document.querySelector('.search');
search.addEventListener('keyup', function() {
  searchOptions(this.value);
});
```
Question 42: Debounce function  -- similar to question 41, but here we create closure
```
function debounce(callback, wait) {
  let timer = null,
      callbackArgs = null,
      context = this;

  const later = () => callback.apply(context, callbackArgs);

  return function() {
    callbackArgs = arguments;
    clearTimeout(timer);
    timer = setTimeout(later, wait);
  }
}

let handleClicked = debounce(() => {
  console.log(`you clicked me`);
}, 500);

document.addEventListener('click', handleClicked);
```
Question 43: Move all zero's to end
```
const moveZeroToEnd = arr => {
  for (let i = 0, j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      if (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]  // swap i and j
      }
      i++;
    }
  }
  return arr;
}

console.log(moveZeroToEnd([1, 8, 2, 0, 0, 0, 3, 4, 0, 5, 0]));  // [1, 8, 2, 3, 4, 5, 0, 0, 0, 0, 0]
```
Question 44: Decode message in matrix [diagional down right, diagional up right]
```
const decodeMessage = (matrix) => {
  // check if matrix is null or empty
  if (matrix === null || matrix.length === 0) {
    return '';
  }

  let result = '',
      //set the boundary of matrix
      x = matrix.length,
      y = matrix[0].length;

  let decode = function(matrix, i = 0, j = 0, direction = 'down') {
    result += matrix[i][j];

    if ((i + 1) === x) {
      direction = 'up';
    }

    // if reach the boundary then reverse the direction or continue in that direction
    (direction === 'down') ? i++ : i--;

    j++;

    //reached end, done with matrix
    if (j === y) {
      return;
    }
    // if reached here, still need to process the matrix
    decode(matrix, i, j, direction);
  }

  decode(matrix);
  return result;
}

let mat = [
  ['I','B','C','A','L','K','A'],
  ['D','R','F','C','A','E','A'],
  ['G','H','O','E','L','A','D'],
  ['G','H','O','E','L','A','D']    
];

console.log(decodeMessage(mat));  //IROELEA
```
Question 45 : find a pair in array, whose sum is equal to given number.
```
function hasPairWithSum(arr, sum) {  
  //Array length cannot be less then 2
  if (arr.length < 2) {
    return null;
  }

  let left = 0,
      right = arr.length -1;

  while(left < high) {
    let pairSum = arr[left] + arr[right];
    if (pairSum < sum) {
      left += 1;
    } else if (pairSum > sum) {
      right -= 1;
    } else {
      return [left, right]
    }
  }
  return null;
}

//Array is sorted
console.log(hasPairWithSum([1,2,4,5], 8)); // null
console.log(hasPairWithSum([1,2,4,4], 8)); // [2,3]
NOTE: if array is not sorted then subract the value with sum and store in difference
// then see if that value exist in difference then return true.
```
Question 46 : Heron's Sqrt root Algorithm
[Link](http://cwestblog.com/2012/10/11/javascript-herons-square-root-algorithm/)
## Algorithm

Question 1: Binary search tree [Add, Remove, find, contain, LCA, balanced?, height, toString, toArray]
[follow this link](https://gist.github.com/gohilumesh/7b82d88b536c527c12de3d4945db8feb)

Question 2: Quick sort Algorithm
[Link](https://github.com/davidshariff/computer-science/blob/master/Sorting/QuickSort.js)
[Refer this link for explanation] (https://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/)


Question 3: Binary Search  [Array should be sorted]
```
function binarySearch(arr, val) {
  let startIndex = 0,
      stopIndex = arr.length - 1,
      middleIndex = Math.floor((startIndex + stopIndex) / 2);

  while(arr[middleIndex] !== val && startIndex < stopIndex){
    if (val < arr[middleIndex]){
      stopIndex = middleIndex - 1;
    } else if (val > arr[middleIndex]){
       startIndex = middleIndex + 1;
    }
    middleIndex = Math.floor((startIndex + stopIndex) / 2);
  }

  return (arr[middleIndex] === val) ? middleIndex : -1;
}

console.log(binarySearch([-1,10,22,35,48,56,67], 22));
console.log(binarySearch([-1,10,22,35,48,56,67], 27));
```
[More info] (https://www.nczonline.net/blog/2009/09/01/computer-science-in-javascript-binary-search/)

Question: 4: Pascal triangle.
```
function pascalTriangle(n) {
    let last = [1], triangle = [last];
    for (let i = 0; i < n; i++) {
        const ls = [0].concat(last),        //[0,1]           // [0,1,1]
              rs = last.concat([0]);        //[1,0]           // [1,1,0]
        last = rs.map((r, i) => ls[i] + r); //[1, 1]          // [1,2,1]
        triangle = triangle.concat([last]); // [[1], [1,1]]   // [1], [1, 1], [1, 2, 1]
    }
    return triangle;   
};

console.log(pascalTriangle(2));
```

## Widget Question

Question 1: Design Project funding widget
[Checkout Github gist link] (https://gist.github.com/gohilumesh/ecdf01304f5d3edbb371f6b32ec9eda2)

Question 2: Design visual display of list, And implement feature to add it to list
[Checkout Github project link] (https://github.com/gohilumesh/list-visualize)

Question 3: CSS slider using animation
[Checkout Github gist link] (https://gist.github.com/gohilumesh/7359d812050c036518a75314ad6f9f6d)

Question 4: CSS Start Widget
[Checkout Github gist link](https://gist.github.com/gohilumesh/64b589366607e99b8d96e6867d42698c)

## React coding test.

Checkout below repository
[UI Execrise] (https://github.com/gohilumesh/ui-exercise)
[UI Image Gallery] (https://github.com/gohilumesh/ui-image-gallery)


## Some more interview questions [link](https://github.com/kennymkchan/interview-questions-in-javascript)

## What happen when you click a link or request a page in browser
- Brower checks DNS cache to find ip address.
- if not find then check os, router, ISP cache to find ip address.
- if not find then isp dns server initiates DNS query to find ip address.
- Once you get ip address, browser will try to establish TCP connection with server
- Browser send http request to server.
- Server handles the request and return the response.
- server sends out http response.
- Browser display HTML content.
[link](https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a)
