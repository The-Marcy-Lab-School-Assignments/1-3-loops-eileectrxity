//Question 6: original function- someone wrote a perfectly functional, but pretty clunky while loop. keep the functionality exactly the same, but write it as a for loop
// const whileToFor = () => {
//   let i = 0; //initializing index, i, at 0
//   while (i < 5) { //while (condition is true) {log current index, i}
//     console.log(i);
//     i++;
//   }
// };
//refactored as a for loop, logging index, i, from 0 incrementing up by 1 as it iterates through loop
const whileToFor = () => {
  for (let i = 0; i < 5; i++) { //loop runs as long as stopping condition of i being less than an exclusive 5 is still true (if condition becomes false, loop won't run)
    console.log(i);
  };
};

whileToFor(); // 0 1 2 3 4

const continueGuardClause = () => {
  for (let i = 1; i < 5; i++) {
    if (!(i === 2) && !(i === 3)) {
      console.log("Sure glad this isn't 2 or 3");
      console.log(i);
    }
  }
};

module.exports = {
  whileToFor,
  continueGuardClause,
};
