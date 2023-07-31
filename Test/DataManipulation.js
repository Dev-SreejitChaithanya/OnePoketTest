const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//function to get the sum of array
function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  return sum;
}

//reading input  from user
readline.question(`Enter array elements `, (elem) => {
  //filters the input in such a way only integers are taken as valid inputs into the array
  let input = elem.trim().split(/\s+/).map(Number).filter(Number.isInteger);
  readline.close();
  console.log(`Sum of elements of array is : ${sumOfArray(input)}`);
});
