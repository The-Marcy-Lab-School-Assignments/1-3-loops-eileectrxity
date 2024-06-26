//Lesson 1-3 Assignment: Loops by Eileen

//Question 1: a for loop that starts on 0, and logs each number up to, but not including, 10; increment each number by 1
const loop0UpTo10 = () => {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  };
};

loop0UpTo10(); // 0 1 2 3 4 5 6 7 8 9

//Question 2: a for loop that starts on 5, and logs each number up to, and including, 10; increment each number by 1
const loop5to10 = () => {
  for (let i = 5; i <= 10; i++) { //starting at 5, increment indice up by 1 until the stopping condition ending i at an inclusive 10 is met
    console.log(i);
  };
};

loop5to10(); // 5 6 7 8 9 10

/*Question 3: a for loop that starts on 0, and logs each even number up to, but not including, 10; where 0 counts as an even number for this function
an if check with continue would technically work here, but it's overkill. a simpler way would be to use i+=2 instead of i++ in the looping condition */
const loopEvenNumbersUpTo10 = () => {
  for (let i = 0; i < 10; i+=2) { //with index starting at 0, increment up by 2 to get even numbers stopping when i is no longer less than an exclusive 10
    console.log(i);
  };
};

loopEvenNumbersUpTo10(); //0 2 4 6 8

//Question 4: a for loop that starts on 5, and logs each number down to, and including, 0; decrement each number by 1
const countdown5to0 = () => {
  for (let i = 5; i >= 0; i--) { //starting index at 5, increment down by 1 until current position i is equal to 0
    console.log(i);
  };
};

countdown5to0(); //5 4 3 2 1 0

//Question 5: a for loop that starts on 0, and logs up to, but not including, a given num argument; increment each number by 1. check the test for how this function should behave if given 0 or a negative number
const loopUpToNum = (num) => {
  for (let i = 0; i < num; i++) { //would not run loop if num is 0 or -1 because i starts at 0 and to run the loop, i has to be less than an exclusive given num (0 < -1 --> is false and 0 < 0 --> also false)
    console.log(i);
  };
};

loopUpToNum(5); // 0 1 2 3 4

/*Question 10: Ok, for real this time! It's fizzbuzz! function should run from 1 to 100 (inclusive of both) with each loop logging:
  if the number is divisible by 3, log "fizz"
  if the number is divisible by 5, log "buzz"
  if the number is divisible by 3 and 5, log "fizzbuzz"
  if the number is not divisible by either, just log the number */
const fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) { //starting index at 1, increment up by 1 iterating up to an inclusive 100
    if ( i  % 3 === 0 && i % 5 === 0) { //most specific condition first
      console.log('fizzbuzz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else console.log(i);
  };
};

fizzbuzz();

module.exports = {
  loop0UpTo10,
  loop5to10,
  loopEvenNumbersUpTo10,
  countdown5to0,
  loopUpToNum,
  fizzbuzz,
};
