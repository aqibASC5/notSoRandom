function random(number){
    randomNumber = number*Math.random();
    randomNumber = Math.floor(randomNumber);
    console.log(randomNumber);
}
random(90);

randomLetter - takes 1 string argument and console.logs a random letter from the given string
randomLetter(“blah”); // “b”
randomLetter(“abcdefg”); // “g”
randomLetter(“z”); // “z”
myGuy - takes 1 string argument and console.logs the same string with “, my guy.” at the end of it
myGuy(“Take it easy”); // “Take it easy, my guy”
string_N_times - takes 2 arguments, a string and a number, and console.logs the string as many times as the given number
hypotenuse - takes 2 number arguments (corresponding to the perpendicular sides of a right triangle) and console.logs the length of the 3rd side, the hypotenuse.
NOTE: don’t worry about the math! Here’s the equation and some links to helpful functions in JavaScript

Math.pow()
Math.sqrt()
hypotenuse(3,4); // 5
Be sure to test to see if your functions are working as expected by calling them at the end of your script and running the ‘node notSoRandom.js’ command in your console.
Remember to add, commit, and push your changes!*/


