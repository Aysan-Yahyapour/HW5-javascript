function digits_count(n) {
  var count = 1;


  while (n / 10 >= 1) {

    n /= 10;
    ++count;

  }

  return count;
}

console.log(digits_count(12112));

console.log(digits_count(457));
