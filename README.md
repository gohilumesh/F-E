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
  return path.split(.).reduce((prev, current) => {
      return prev ? prev[current] : undefined;
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
  let filteredArray = [{name: 'john'},{name: 'kelly'}].filter((value) => { return value.name === 'kelly'});

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
  let count = {};
  if (str) {
    let stripStr = str.replace(/ /g, "").toLowerCase(); // remove space convert to lowercase
    for (let chr of stripStr) {
      if (count[chr]) {
        count[chr]++;
      } else {
        count[chr] = 1;
      }
    }
  }
  return count;
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

console.log(reverse('12345'));
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
var deepExtend = function(out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];

    if (!obj)
      continue;

    for (var key in obj) {
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

deepExtend({}, objA, objB);
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
  let orderedTickets =[...this.getStartingPoint()];
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

Question 16: Array rotation
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

## Algorithm

Question 1: Binary Search  [Array should be sorted]
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


console.log(binarySearch([-1, 10,22,35,48,56,67], 22));
console.log(binarySearch([-1, 10,22,35,48,56,67], 27));
```
[More info] (https://www.nczonline.net/blog/2009/09/01/computer-science-in-javascript-binary-search/)


## Widget Question

Question 1. Design Project funding widget

[Checkout Github gist link] (https://gist.github.com/gohilumesh/ecdf01304f5d3edbb371f6b32ec9eda2)

Question 2. Design visual display of list, And implement feature to add it to list

[Checkout Github project link] (https://github.com/gohilumesh/list-visualize)


## React coding test.

Checkout below repository
[UI Execrise] (https://github.com/gohilumesh/ui-exercise)
[UI Image Gallery] (https://github.com/gohilumesh/ui-image-gallery)
