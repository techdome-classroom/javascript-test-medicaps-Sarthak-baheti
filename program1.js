const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let charIndexMap = new Map();
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        if (charIndexMap.has(char)) {
            
            start = Math.max(start, charIndexMap.get(char) + 1);
        }
        
        maxLength = Math.max(maxLength, end - start + 1);
      
        charIndexMap.set(char, end);
    }

    return maxLength;
}

rl.question("Enter a string: ", function(userInput) {
   
    const longestLength = lengthOfLongestSubstring(userInput.trim());
    console.log("Length of the longest substring without repeating characters:", longestLength);
    rl.close();
});