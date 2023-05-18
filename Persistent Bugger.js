function persistence(num) {
    let count = 0;
  
    while (num >= 10) {
      num = multiplyDigits(num);
      count++;
    }
  
    return count;
  }
  
  function multiplyDigits(num) {
    return num.toString().split('').reduce((a, b) => a * b, 1);
  }
  