# 1.1.0 - Loops

- [1.1.0 - Loops](#110---loops)
  - [Before you start](#before-you-start)
- [Short Answers](#short-answers)
- [Question 1: loop0UpTo10](#question-1-loop0upto10)
- [Question 2: loop5to10](#question-2-loop5to10)
- [Question 3: loopEventNumbersUpTo10](#question-3-loopeventnumbersupto10)
- [Question 4: countdown5to0](#question-4-countdown5to0)
- [Question 5: loopUpToNum](#question-5-loopuptonum)
- [Question 6: MODIFY whileToFor](#question-6-modify-whiletofor)
- [Question 7: MODIFY continueGuardClause](#question-7-modify-continueguardclause)
- [Question 8: DEBUG brokenLoop](#question-8-debug-brokenloop)
- [Question 9: DEBUG brokenNested](#question-9-debug-brokennested)
- [Question 10: fizzBuzz](#question-10-fizzbuzz)
- [Bonus: Add a while loop to the 1-0-3-lab](#bonus-add-a-while-loop-to-the-1-0-3-lab)

## Before you start

You will see a _lot_ of similar loops on these problems. You may want to simply cut and copy code, and _ordinarily_, that's fine. But for this, we want to establish some muscle memory with `for` loops. So, for all the "from scratch" questions, please try to write each one out by hand.

`for` loops are used for a ton of algorithm challenges due to their dynamic nature. We want you to get so good at writing them it's literally boring.

Also, READ THE TESTS CAREFULLY, the limits are exact! And if the prompt/description is confusing, do what the _test_ content says. Remember "inclusive" means "include the number" and "exclusive" means "NOT including the number"

So inclusive 1 to exclusive 5 is 1, 2, 3, 4, and exclusive 5 to inclusive 10 is 6, 7, 8, 9, 10.

# Short Answers

There are short answers for this assignment, please make sure you fill them out. Remember your answer should be formatted like so:

```plaintext
# Question
Some question about a piece of technology

# Answer
My answer written clearly, and just below the answer line. I won't touch the # feedback section, that's for my teacher

# Feedback
```

# Question 1: loop0UpTo10

Write a `for` loop that starts on 0, and logs each number up to, but not including, 10. Increment each number by 1.

# Question 2: loop5to10

Write a `for` loop that starts on 5, and logs each number up to, and including, 10. Increment each number by 1.

# Question 3: loopEventNumbersUpTo10

Write a `for` loop that starts on 0, and logs each _even_ number up to, but not including, 10. What should you increment by?

- 0 counts as an even number for this function
- an `if` check with `continue` would _technically_ work here, but it's overkill. Is there a simpler way to do this?

# Question 4: countdown5to0

Write a `for` loop that starts on 5, and logs each number down to, and including, 0. Decrement each number by 1.

# Question 5: loopUpToNum

Write a `for` loop that starts on 0, and logs up to but, but not including, a given `num` argument. Increment each number by 1.

Check the test for how this function should behave if given 0 or a negative number!

# Question 6: MODIFY whileToFor

Someone wrote at perfectly functional, but pretty clunky `while` loop. Can you keep the functionality exactly the same, but write it as a `for` loop?

# Question 7: MODIFY continueGuardClause

We've got some workable but clunky logic to avoid printing some numbers. In `continueGuardClause` can you maintain the exact same functionality, but do it with a `continue` statement in a guard clause?

# Question 8: DEBUG brokenLoop

Inside `brokenLoop` it looks like we're trying to use a loop to compile a bunch of numbers into a string. However, the loop's condition and incrementor look wrong. Can read what the tests are expecting and fix this function?

# Question 9: DEBUG brokenNested

Ah, here's a real puzzler. Inside `brokenNested` we have a nested `for` loop situation that's trying to compile a string. However instead of returning:

```plaintext
"00-01-02-03-04-05-06-07-08-09-10-11-12-13-14-15-16-17-18-19"
```

It's returning:

```plaintext
"00-11-22-33-44-55-66-77-88-99-00-11-22-33-44-55-66-77-88-99"
```

There's a problem with our child loop, can you fix it?

# Question 10: fizzBuzz

Ok, for real this time! It's fizzbuzz! The function should run from 1 to 100 (inclusive of both). Here's what it should log with each loop:

- If the number is divisible by 3, log "fizz"
- If the number is divisible by 5, log "buzz"
- If the number is divisible by 3 and 5, log "fizzbuzz"
- If the number is not divisible by either, just log the number

# Bonus: Add a while loop to the 1-0-3-lab

First off, if you haven't had a chance to start that lab, _that's_ the bonus. That lab is the foundation to making a CLI app, and we'll build on it in this week's lab.

However, it was incomplete! It mentioned at the very end how we could use a `while` loop to make it run longer. Well, now you know how to do that, so throw one in!

If you are done with that, our next lecture is going to be on Arrays. They're super cool, but a little different than our current data types. Try getting an early start by watching this video and reading this article.

[W3 Schools - Interactive Array Article](https://www.w3schools.com/js/js_arrays.asp)
[WebDevSimplified - JS Arrays Crash Course](https://www.youtube.com/watch?v=7W4pQQ20nJg)
