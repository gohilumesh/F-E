#Front-end Interview Questions


## Javascript question
Question 1. Check if object is empty or not
```
function isEmpty(TEMP_OBJECT) {
  return Object.keys(TEMP_OBJECT).length === 0 && TEMP_OBJECT.constructor === Object;
}
```
[more options](http://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object)

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

## Widget Question

Question 1. Design Project funding widget

[Checkout Github gist link] (https://gist.github.com/gohilumesh/ecdf01304f5d3edbb371f6b32ec9eda2)

Question 2. Design visual display of list, And implement feature to add it to list

[Checkout Github project link] (https://github.com/gohilumesh/list-visualize)
