function reversedString(str) {
    let reversed = ""; 
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; 
    }

    return reversed;
}

// console.log(reversedString("jake"));

function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));

function largestNum(nums) {
    let largest = nums[0];
    for ( let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }
    return largest;
}

// console.log(largestNum([1, 4, 8, 24, 97, 43]));

function removeDuplicates(nums) {
    return [...new Set(nums)]; //uses SET javascript object doesnt allow duplicates.
}

// console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 5, 5, 6, 7]));

function mergeArrays(arr1, arr2) {
    let result = [];
    let i = 0, j= 0;

    while (i < arr1.legnth && j < arr2.legnth) {
        if (arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++
        }
    }
    return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}

// console.log(mergeArrays([1, 3, 5], [2, 4, 6]));

function firstNonRepeatChar(str) {
    let charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) +1;
    }

    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}

// console.log(firstNonRepeatChar("aabbcddce"));

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz")
        } else if (i % 3 === 0) {
            console.log("fizz")
        } else if (i % 5 ===0) {
            console.log("buzz")
        } else {
            console.log(i);
        }
    }
}

console.log(fizzBuzz(30));


