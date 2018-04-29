const strPermutations = str => {
    if (str.length < 2){
      return str; // This is our break condition
    }

    let permutations = []; // This array will hold our permutations

    for (var i=0; i<str.length; i++) {
        let char = str[i];

        let remainingString = `${str.slice(0,i)}${str.slice(i+1)}`;
        for (let subPermutation of strPermutations(remainingString)) {
          permutations.push(char + subPermutation);
        }
    }
    return permutations;
}

console.log(strPermutations("abcd"));
// ["abcd", "abdc", "acbd", "acdb", "adbc", "adcb", "bacd", "badc", "bcad", "bcda", "bdac", "bdca", "cabd",
//  "cadb", "cbad", "cbda", "cdab", "cdba", "dabc", "dacb", "dbac", "dbca", "dcab", "dcba"]
