function minimumStepsToOne(n) {
  let cache = {};
  let count = 0;
  
  function recurse(curr) {
    if (curr === 1) {
      return 0;
    }
    
    if (curr in cache) {
      count++;
      return cache[curr];
    }
    
    let steps = recurse(curr - 1);
    
    if (curr % 2 == 0) {
      let divBy2 = recurse(curr/2);
      steps = Math.min(steps, divBy2);
    }
    
    if (curr % 3 == 0) {
      let divBy3 = recurse(curr/3);
      steps = Math.min(steps, divBy3);
    }
    
    let result =  1+steps;
    cache[curr] = result;
    
    return result;
  }
  
  let res = recurse(n);
  return res;
}
