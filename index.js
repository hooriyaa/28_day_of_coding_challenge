"use strict";
// QUESTION 82:
function lenghtOfString(str) {
    return str.length;
}
let result = lenghtOfString("mahnoor");
console.log(result);
// QUESTION 83:
function convertCase(str) {
    let converLowerCase = str.toLowerCase();
    console.log(`Lowercase: ${converLowerCase}`);
    let convertUppercase = str.toUpperCase();
    console.log(`Uppercase: ${convertUppercase}`);
}
convertCase("Hello Mahnoor");
// QUESTION 84:
function replaceText(text) {
    return text.replace(/Javascript/g, "Typescript");
}
let res = replaceText("I love to learn Javascript and Javascript is Awesome!!");
console.log(res);
