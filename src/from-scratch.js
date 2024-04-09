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
