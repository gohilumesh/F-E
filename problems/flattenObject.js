let obj = {
  "a": {
    "b": {
      "c": 12,
      "d": "Hello World"
    },
    "e": [1,2,3]
  }
};

const flatten = (obj, parentkey) => {
  return Object.keys(obj).reduce((acc, key) => {

    let val = obj[key];
    if (typeof val === "object" && !Array.isArray(val)) {
      let flat = flatten(val, key);
      if (parentkey) {
        for (let i in flat) {
          let k = `${parentkey}/${i}`;
          acc[k] = flat[i];
        }
      } else {
        acc = flat;
      }
    } else {
      let prop = parentkey && `${parentkey}/${key}` || key;
      acc[prop] = val;
    }
    return acc;
  }, {});
};


console.log(flatten(obj));

// {
//   "a/b/c": 12,
//   "a/b/d": "Hello World",
//   "a/e": [1,2,3]
// }
