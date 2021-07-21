const checkValidSearch = (target, source) => {
  if (typeof target !== 'number' || 
      !Array.isArray(source) ||
      !source.length > 0) {
    return 'Invalid data types, only accepts a number and an array of numbers';
  }
  
  for (let i = 0; i < source.length; i++) {
    if (typeof source[i] !== 'number') {
      return 'Invalid data types, this can only be an array of numbers';
    }
  }

  return binarySearch(target, source);
}

const binarySearch = (target, source) => {
  const middle = source[Math.floor(source.length / 2)];
  
  if (source.length === 1 && !source.includes(target)) {
    return 'No results found';
  }
  
  if (target === middle) {
    return target;
  }
  
  if (target < middle) {
    return binarySearch(target, source.splice(0, source.indexOf(middle)));
  }
  return binarySearch(target, source.splice(source.indexOf(middle + 1)));
}
