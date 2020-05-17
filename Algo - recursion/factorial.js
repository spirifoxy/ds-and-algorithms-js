// Write two functions that finds the factorial of any number.
// One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
    if (number <= 1) {
        return number
    }
    const answer = number * findFactorialRecursive(number - 1);
    return answer;
  }
  
  function findFactorialIterative(number) {
    let answer = 1;
    for (let i = number; i > 1; i--) {
        answer *= i;
    }
    return answer;
  }
  