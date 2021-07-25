const displayFib = init => {
  const output = {};
  
  function fibbonochi(num, tab = []) {
    if (num <= 0) return 0;
    else if (num === 1) return 1;
    else if (tab[num] > 0) return tab[num];

    tab[num] = fibbonochi(num - 1, tab) + fibbonochi(num - 2, tab);
    return tab[num];
  }
  
  for (let i = 0; i <= init; i++) {
    output[i] = fibbonochi(i);
  }
  return output;
}
