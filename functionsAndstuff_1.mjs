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





/*  Task 4
    Create a function that reads an indetermind number of integers from the console and returns the sum of the numbers.
*/



/*  Task 5
    Create a function that given a string returns the number of words in the string.
    Do not use any built in functionality for splitting strings etc.
*/



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

//#region Util Function
function addSpacing(lines = 1) {
    for (let i = 0; i < lines; i++){
    console.log("")
    }
    }
//#endregion


