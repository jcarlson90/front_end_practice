function reversedString(str) {
    let reversed = ""; 
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; 
    }

    return reversed;
}

console.log(reversedString("coding"));

function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hellow"));

