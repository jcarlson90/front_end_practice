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


