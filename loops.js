console.log("==== Welcome to the loops exercise. ====\n")

// TODO: Create an array called numbers with values 1 through 5

let numbers = [1, 2, 3, 4, 5];

// TODO: Write a for loop that prints each number in the array

console.log("==== This array section will write a for loop that prints each number in the array ====\n")
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// TODO: Write a while loop that counts down from 5 to 1

console.log("==== This array section will write a while loop that counts down from 5 to 1 ====\n")

let i = 5;
while (i > 0) {
  console.log(i);
  i--;
}

// TODO: Create a loop that prints only even numbers from the numbers 

console.log("==== This array section will create a loop that prints only even numbers from the numbers  ====\n")

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}


// TODO: Create a loop that calculates the sum of all numbers in the array

console.log("==== This array section will create a loop that calculates the sum of all numbers in the array  ====\n")

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);
