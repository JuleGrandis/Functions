/* 
    NB! There is absolutly no point to these tasks if you use AI or "google" to solve them.
    The point is to learn and practice, not to get the perfect answer.
*/

/*  Task 1
    Create a function that given an array of integers returns the largers number in the array.
    Do not use any built in functionality, use only basic js.
*/
console.log("Task 1");

function findLargestNumberInArray(arr) {
    let largestNumber = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            largestNumber = arr[i];
        }
    }
    
    return largestNumber;
}

let test = [4, 7, 55, 1231, 23151, 213, 51, 2312, 215165, 213512, 767434, 23];
console.log(findLargestNumberInArray(test));



/*  Task 2
    Create a function that returns an array of n posetive numbers (only integers), where n is given as a parameter.
    The numbers should be unique but not consecutive.
    Do not use any built in functionality for sorting, matching etc. (You may use Random and Math functions)
*/
addSpacing(1);
console.log("Task 2");

function generateUniqueNumberArray(n) {
    let uniqueNumbers = [];

    while (uniqueNumbers.length < n) {
        let randomNum = Math.floor(Math.random() * 100000) + 1;

        let isUnique = true;
        for (let i = 0; i < uniqueNumbers.length; i++) {
            if (uniqueNumbers[i] === randomNum) {
                isUnique = false;
                break;
            }
        }

        if(isUnique) {
            uniqueNumbers.push(randomNum);
        }
    }

    return uniqueNumbers;
}

console.log(generateUniqueNumberArray(7));


/*  Task 3
    Create a function that given a string and a pattern returns true if the pattern matches the string.
    Do not use any built in functionality for matching (no regex)etc.

    A pattern is defined as a series of *,n,s and -.
    * matches anything except an empty string.
    n matches any number.
    s matches any string.
    - matches a single space.

    Example:
    pattern: sssss-nnn-*****
    string: "Hello 123 World"

*/
addSpacing(1);
console.log("Task 3");

function matchPattern(string, pattern) {
    let stringIndex = 0;
    let patternIndex = 0;

    while (stringIndex < string.length && patternIndex < pattern.length) {
        let patternChar = pattern[patternIndex];

        if (patternChar === "*") {
            if (string[stringIndex] === ' ') {
                return false;
            }
            stringIndex++;
        } else if (patternChar === 'n') {
            if (string[stringIndex] < '0' || string[stringIndex] > '9') {
                return false;
            }
            stringIndex++;
        } else if (patternChar === 's') {
            if (string[stringIndex] === ' ') {
                return false;
            }
            stringIndex++;
        } else if (patternChar === '-') {
            if (string[stringIndex] !== ' ') {
                return false;
            }
            stringIndex++;
        } else {
            return false;
        }

        patternIndex++;
    }
    return stringIndex === string.length && patternIndex === pattern.length; 
}

let pattern = "sssss-nnn-*****";
let string = "Hello 123 World";
console.log(matchPattern(string, pattern));



/*  Task 4
    Create a function that reads an indetermind number of integers from the console and returns the sum of the numbers.
*/
addSpacing(1);
console.log("Task 4");

console.log("I am unsure as to how to complete this task. If it is to read and calculate input in terminal, which then outputs the sum, \n I would assume the function would need readline and something like process.stdin. It's only a guess, but that's as far as my brainstorm got.")


/*  Task 5
    Create a function that given a string returns the number of words in the string.
    Do not use any built in functionality for splitting strings etc.
*/
addSpacing(1);
console.log("Task 5");

function countWords(string) {
    let wordCounter = 0;
    let insideWord = false;

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (char !== ' ') {
            if (!insideWord) {
                insideWord = true;
                wordCounter++;
            }
        } else {
            insideWord = false;
        }
    }

    return wordCounter;
}

let testString = "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.";

console.log(countWords(testString));

/*  Task 6
    Create the functions that given a color value in hex format reutns the RGB and CMYK values .
    Do not use any built in functionality.

    Hex is defined as #RRGGBB. Where RR, GG and BB are two digit hexadecimal numbers.
    RGB is defined as three integers between 0 and 255.
    CMYK is defined as four floats between 0 and 1.

    The conversion from RGB to CMYK is defined as:
    K = 1 - max(R, G, B) / 255
    C = (1 - R / 255 - K) / (1 - K)
    M = (1 - G / 255 - K) / (1 - K)
    Y = (1 - B / 255 - K) / (1 - K)

    Tip: 
    - You can use int.Parse("FF", System.Globalization.NumberStyles.HexNumber) to convert a hex number to an integer.
    - You can read a substring from a string using str.Substring(startIndex, length)
    - You can return multiple values from a function by using {}.

*/
addSpacing(1);
console.log("Task 6");

function hexConverter(hex) {

    let red = null;
    let green = null;
    let blue = null;

    let rRatio = red / 255;
    let gRatio = green / 255;
    let bRatio = blue / 255;

    let k = 1 - Math.max(rRatio, gRatio, bRatio);
    let c = (1 - rRatio - k) / (1 - k) || 0;
    let m = (1 - gRatio - k) / (1 - k) || 0;
    let y = (1 - bRatio - k) / (1 - k) || 0;

    return {
        rgb: { r: red, g: green, b: blue },
        cmyk: { c: c.toFixed(4), m: m.toFixed(4), y: y.toFixed(4), k: k.toFixed(4) }
    };
}

console.log("This is how far I got, I couldn't quite figure out how to get the red/green/blue out. Maybe I could create a helper function within the function?");
//#region Util Function
function addSpacing(lines = 1) {
    for (let i = 0; i < lines; i++){
    console.log("")
    }
    }
//#endregion


