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

// you do NOT need an if check
const loopEvenNumbersUpTo10 = () => {
};

const countdown5to0 = () => {
};

const loopUpToNum = () => {
};

const fizzbuzz = () => {
};

module.exports = {
  loop0UpTo10,
  loop5to10,
  loopEvenNumbersUpTo10,
  countdown5to0,
  loopUpToNum,
  fizzbuzz,
};
