const mergeIntervals = (intervals) => {
  // test if there are at least 2 intervals
  if(intervals.length <= 1)
    return intervals;

  let stack = [];
  let top   = null;

  // sort the intervals based on their start values
  intervals = intervals.sort((startValue, endValue) => {
    if (startValue[0] > endValue[0]) {
      return 1;
    } else if (startValue[0] < endValue[0]) {
      return -1;
    }
    return 0;
  });

  // push the 1st interval into the stack
  stack.push(intervals[0]);

  // start from the next interval and merge if needed
  for (let i = 1; i < intervals.length; i++) {
    // get the top element
    top = stack[stack.length - 1];

    // if the current interval doesn't overlap with the
    // stack top element, push it to the stack
    if (top[1] < intervals[i][0]) {
      stack.push(intervals[i]);
    }
    // otherwise update the end value of the top element
    // if end of current interval is higher
    else if (top[1] < intervals[i][1]) {
      top[1] = intervals[i][1];
    }
  }
  return stack;
};

console.log(mergeIntervals( [[1,3],[2,6],[8,10],[15,18]]));  //[[1, 6], [8, 10], [15, 18]]
console.log(mergeIntervals([[1,4],[3,5],[2,4],[7,10]])); //  [[1, 5], [7, 10]]
