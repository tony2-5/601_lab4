// Problem 1
let num = prompt("Enter the number to check: ")
if(num%2===0){
  console.log(num+" is a Even number")
} else {
  console.log(num+" is a Odd number")
}
// Problem 2
let num1 = Number(prompt("Enter the 1st number: "))
let num2 = Number(prompt("Enter the 2nd number: "))
let num3 = Number(prompt("Enter the 3rd number: "))
if(num1>=num2 && num1>=num3) {
  console.log("The largest number is "+num1)
} else if(num2>=num1 && num2>=num3) {
  console.log("The largest number is "+num2)
} else {
  console.log("The largest number is "+num3)
}
// Problem 3
let fibonacciNums = prompt("Enter the number of terms: ")
let fibonacciArray = []
let resultString = ''
for(let i = 0;i<fibonacciNums;i++) {
  if(i===0) {
    fibonacciArray.push(0)
  } else if(i===1) {
    fibonacciArray.push(1)
  } else {
    fibonacciArray.push(fibonacciArray[i-1]+fibonacciArray[i-2])
  }
}
for(let i =0;i<fibonacciArray.length;i++) {
  resultString+=fibonacciArray[i]+" "
}
console.log(resultString)
// Problem 4
let string = prompt("Enter the String: ")
let replace = prompt("Enter the character you want to replace: ")
let newChar = prompt("Enter the new character: ")
let newString = ''
for(let i =0;i<string.length;i++) {
  if(string[i]===replace) {
    newString+=newChar
  } else {
    newString+=string[i]
  }
}
console.log(newString)