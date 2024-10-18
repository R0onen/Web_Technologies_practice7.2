function fibonacciGenerator(n) {
    // Create an empty array to hold the Fibonacci sequence
    var fibSequence = [];
    
    // Handle cases when n is 0 or 1
    if (n === 0) {
        return fibSequence;
    } else if (n === 1) {
        fibSequence.push(0);
        return fibSequence;
    }

    // Start the sequence with the first two numbers: 0 and 1
    fibSequence.push(0);
    fibSequence.push(1);

    // Generate the remaining numbers in the sequence
    for (var i = 2; i < n; i++) {
        var nextNumber = fibSequence[i - 1] + fibSequence[i - 2];
        fibSequence.push(nextNumber);
    }

    return fibSequence;
}

// Example usage:
console.log(fibonacciGenerator(3));  // Output: [0, 1, 1]
console.log(fibonacciGenerator(5));  // Output: [0, 1, 1, 2, 3]
console.log(fibonacciGenerator(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
