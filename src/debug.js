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

/*Queston 9: original function- we have a nested for loop situation that's trying to compile a string. however, instead of returning:
"00-01-02-03-04-05-06-07-08-09-10-11-12-13-14-15-16-17-18-19"
it's returning: "00-11-22-33-44-55-66-77-88-99-00-11-22-33-44-55-66-77-88-99"
there's a problem with our child loop, can you fix it? */
// const brokenNested = () => {
//   let result = ''; //initializing an empty string for storing result in
//   for (let i = 0; i < 2; i++) { //starting at 0, current position, i, will increment up by 1 for loop iterating a total of two times
//     for (let i = 0; i < 10; i++) { //starting at 0, increment up by 1 nine times, with nested loop no longer running after the 10th time as the stopping condition will be met
//       result += `-${i}${i}`; //{nested loop's i}{nested loop's i again}
//     }
//   }
//   return result.slice(1); //if this were result.slice(0), when logged, result would start printing as '-00-...' while result.slice(1) starts as '00-...' instead
// };

//debugged function returning a string of two separate indexes side by side as they iterate through a parent for loop and a nested for loop
const brokenNested = () => {
  let result = '';
  for (let i = 0; i < 2; i++) { //running the nested loop below a total of two separate times
    for (let j = 0; j < 10; j++) { //changed positional index variable to j instead of i in order to clearly denote which indice to print
      result += `-${i}${j}`; //{parent loop's i}{nested loop's j}; adding the indices to the result string
    }
  }
  return result.slice(1); //starting string from index 1, skips the very first dash in the result string
};

console.log(brokenNested()); // '00-01-02-03-04-05-06-07-08-09-10-11-12-13-14-15-16-17-18-19'

module.exports = {
  brokenLoop,
  brokenNested,
};
