const getAllSubsets =
      theArray => theArray.reduce(
        (subsets, value) => subsets.concat(
         subsets.map(set => [value,...set])
        ),
        [[]]
      );

console.log(getAllSubsets([1,2,3]));
