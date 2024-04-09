//Question 8: original function- it looks like we're trying to use a loop to compile a bunch of numbers into a string, however, the loop's condition and incrementor look wrong. fix it based on what the tests are expecting
// const brokenLoop = (start, end) => {
//   let result = ''; //intializing our variable for storing the iteration of two given nums as a string
//   for (let i = start; i < end; i += 2) { //for loop starting at an inclusive given num and ending at an exclusive given end, incrementing the index/sequential position, i, up by 2 (an issue because it skips every 2nd/even position, leaving those out of the new string)
//     result += i; //storing the current position number in variable, result, with each increment
//   }
//   return result; ///returning the final result with all indices accounted for, as a string
// };

//debugged function with a for loop, taking in two number arguments and returning a string of those numbers iterated through an inclusive start and end
const brokenLoop = (start, end) => {
  let result = '';
  for (let i = start; i <= end; i++) { //now iterating through each number from the inclusive given start to the inclusive given end, capturing all indices this time
    result += i; //storing each indice and adding the numbers onto the string variable, result
  }
  return result;
};

console.log(brokenLoop(2, 10)); // '2345678910'

const brokenNested = () => {
  let result = '';
  for (let i = 0; i < 2; i++) {
    for (let i = 0; i < 10; i++) {
      result += `-${i}${i}`;
    }
  }
  return result.slice(1);
};

module.exports = {
  brokenLoop,
  brokenNested,
};
