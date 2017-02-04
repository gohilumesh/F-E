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

Input :
let srcObject = {
    'system' : {
        'database' : {
              '0' : {
                'host' : '54.232.122',
                'port' : 3306
             },
              '1' : {
                'host' : '54.232.123',
                'port' : 3307
             },
              '2' : {
                'host' : '54.232.123',
             }
       }
   }
},
path = system.database.1.port;

Output: 3307
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

Question 6. write a script that return the number of occurrences of character in "Join the 42..." paragraph example: the letter "j" occurs twice within the paragraph

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

let fibonnaci = (function() {
  let memo = {};
  return function fib(num) {

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    return memo[num] = fib(num - 1) + fib(num - 2);
  }
})();

console.log(fibonnaci(7))
```
[More info](https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e#.m9ms009bh)

Question 9: Random Number between 5 and 7

```
// 5 to 7
let min = 5;
let max = 7;
console.log(min + Math.floor(Math.random() * ((max-min)+1)));
```

Question 10: Get HTML form values as json object
```
  // Use the array reduce function with form elements.
  const formToJSON = elements => [].reduce.call(elements, (data, element) => {
    data[element.name] = element.value;
    //check for multi checkbox and multi select
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
  while( num != 0 )
  {
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

Question 13: Deep copy of object
```
let deepExtend = function(out = {}) {
  for (let i = 1; i < arguments.length; i++) {
    let obj = arguments[i];
    if (!obj)
      continue;

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object')
          out[key] = deepExtend(out[key], obj[key]);
        else
          out[key] = obj[key];
      }
    }
  }

  return out;
};

console.log(deepExtend({}, {a:1, b:{c:2, d:3}},
                           {e:4, b:{f:1}}
          ));
```
[more info](http://youmightnotneedjquery.com/)

Question 14: Sort ticket based on flying order.
```
"use strict";

function SortTickets(tickets) {
  this.reverseTickets = {}
  this.tickets = tickets;
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
function transpose(arr) {
  return arr[0].map((col, i) => {
    return arr.map(row => row[i]);
  });
}

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

console.log(getColumn(twoDimensionalArray, 1));

//Result = [2,5,8]
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
  let binaryArr = num.toString(2);

  let maxOccurence = 0,
      occurence = 0;
  for (let i =0; i< binaryArr.length; i++) {
    if (binaryArr[i] === '1') {
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
        if (matrix.length == 0) {
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

console.log(mergeSortedArray([1,2,3,4,5,6], [0, 3,4,7]));
```

Question 25: Anagram of words
```
const words = ['map', 'art', 'how', 'rat', 'tar', 'who', 'pam', 'shoop'];

function alphabetize(word) {
  return word.split('').sort().join('');
}

function anagramGrouper(words) {
  let anagrams = {};
  for (let word of words) {
     const sortedWord = alphabetize(word);
     if (anagrams[sortedWord]) {
        anagrams[sortedWord].push(word);
     } else {
        anagrams[sortedWord] = [word];
     }
  }

  return anagrams;
}

console.log(anagramGrouper(words));
```
Question 26: Print the largest (maximum) hourglass sum found in 2d array.
```
// if arr 6 X 6 then iterate it till 4 X 4    [reduce by two]
// if arr 8 X 8 then iterate it till 6 X 6    [reduce by two]
function main(arr) {
    let maxScore = -999;
    for (let i =0; i< 4; i++){
        for (let j =0; j< 4; j++){
            let total = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]  +arr[i+1][j + 1]+ arr[i+2][j] + arr[i+2][j +1] + arr[i+2][j + 2];

            maxScore = Math.max(maxScore, total)
        }
    }
    console.log(maxScore);
}
```
Question 27:  Transform array of object to array
```
var data = [ {"vid":"aaa", "san":12},
            {"vid":"aaa", "san":18},
            {"vid":"aaa", "san":2},
            {"vid":"bbb", "san":33},
            {"vid":"bbb", "san":44},
            {"vid":"aaa", "san":100}];

let result = {};

for (let d of data) {
  let obj = {};
  if (d.vid in result) {
    obj = result[d.vid];
  } else {
    obj.san = [];
    obj.vid = d.vid;
    result[d.vid] = obj
  }
  obj.san.push(d.san);
}

console.log(Object.keys(result).map(key => result[key]));

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
## Algorithm

Question 1: Binary search tree [Add, Remove, find, contain, LCA, toString, toArray]

[follow this link](https://gist.github.com/gohilumesh/7b82d88b536c527c12de3d4945db8feb)

Question 2: Quick sort Algorithm
[Algorithm] (https://github.com/davidshariff/computer-science/blob/master/Sorting/QuickSort.js)
[Refer this link for explanation] (https://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/)


Question 3: Binary Search  [Array should be sorted]
```
function binarySearch(arr, val) {

  let startIndex = 0,
      stopIndex = arr.length -1,
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


## React coding test.

Checkout below repository
[UI Execrise] (https://github.com/gohilumesh/ui-exercise)
[UI Image Gallery] (https://github.com/gohilumesh/ui-image-gallery)


## Some more interview questions [link](https://github.com/kennymkchan/interview-questions-in-javascript)
