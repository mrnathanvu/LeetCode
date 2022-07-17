/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.


Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.


Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.


Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

// ------------------------------------------------------------
// ------------------------- SOLUTION -------------------------
// ------------------------------------------------------------

// Example 1:
// s = "III";

// Example 2:
// s = "LVIII";

// Example 3:
// s = "MCMXCIV";

var romanToInt = function (s) {
    // Define Roman numerals with an array of symbols
    const symbol = ["I", "V", "X", "L", "C", "D", "M"];
    // Define Roman numerals with an array of values
    const value = [1, 5, 10, 50, 100, 500, 1000];

    // An array of all evalutated values
    let evalutatedValue = [];
    // Result to return
    let result = 0;

    // Use a for loop to iterates through the elements in the parameter
    for (let i = 0; i < s.length; i++) {
        // console.log("Element: ", s[i]);
        // Use a for loop to iterates through symbol array
        for (let j = 0; j < symbol.length; j++) {
            // If the parameter element matches the symbol element
            if (s[i] === symbol[j]) {
                // console.log("Symbol: ", symbol[j]);
                // Use the current index to retrive the corresponding value from the value array
                let currentValue = value[j];
                // console.log("Value: ", currentValue);
                // Push the value to evalutatedValue array
                evalutatedValue.push(currentValue);
                // console.log("..........");
            }
        }
    }
    // console.log("evalutatedValue: ", evalutatedValue);

    // console.log("==========");

    // Use a for loop to iterates through evalutatedValue array
    for (let k = 0; k < evalutatedValue.length; k++) {
        let currentValue = evalutatedValue[k];
        let nextValue = evalutatedValue[k + 1];
        // If the current value is smaller than next value
        if (currentValue < nextValue) {
            // console.log("Current value: ", currentValue);
            // console.log("Next value: ", nextValue);
            // Subtract the current evalutatedValue element from the next evalutatedValue element
            let difference = nextValue - currentValue;
            // console.log("The difference: ", difference);
            evalutatedValue.splice(k, 2, difference);
            // console.log("..........");
        }
    }
    // console.log("evalutatedValue: ", evalutatedValue);

    // Use a for loop to iterates through evalutatedValue array
    for (let l = 0; l < evalutatedValue.length; l++) {
        // Accumulate all the values from evalutatedValue array and store in result
        let currentValue = evalutatedValue[l];
        result += currentValue;
    }
    // console.log("evalutatedValue: ", evalutatedValue);
    return result;
};

console.log(romanToInt(s));
