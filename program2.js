const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function smallest_missing_positive_integer(nums) {
    const n = nums.length;

    
    const seen = {};
    for (const num of nums) {
        if (num > 0) {
            seen[num] = true;
        }
    }

    
    for (let i = 1; i <= n + 1; i++) {
        if (!seen[i]) {
            return i;
        }
    }
}

rl.question("Enter a list of integers separated by space: ", function(input) {
    const nums = input.trim().split(" ").map(Number);
    const result = smallest_missing_positive_integer(nums);
    console.log("Smallest missing positive integer:", result);
    rl.close();
});





