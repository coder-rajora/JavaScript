//let score = "33"  // inn sab ko uncomment karke dekh lena kya output aa raha hai.
//let score = null
//let score = undefined
//let score = true
// let score = "Rishabh"

// console.log(typeof score)
// console.log(typeof(score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// Some notes:
// "33" => 33
// "33abc" => NaN (Not a Number)  //output to ye dega but iska type abhi bhi number hi hai.
//true => 1 ; false => 0

//********************************************************************************************************************************

// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// Some notes:
// 1 => true ; 0 => false
// "" => false
// "Rishabh" => true

//********************************************************************************************************************************

// let someNumber = 33
// let stringNumber = String(someNumber) 
// console.log(stringNumber)
// console.log(typeof stringNumber);  // output dikhne mai number hai but string mai convert ho chuka hai.

//***************************************************Operations******************************************************************/

// let value = 3
// let negValue = -value
// console.log(negValue);

// //console.log(2+2);
// //console.log(2-2);
// //console.log(2*2);
// //console.log(2**3);
// //console.log(2/3);
// //console.log(2%3);

// let str1 = "hello"
// let str2 = " Rishabh" 

// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true); //ye sab bad practices hain , inhe nahin karna chahiye 
// console.log(+""); //ye sab bad practices hain , inhe nahin karna chahiye 

// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2  //ye sab cheezein nahin karni chahiye kyunki ye code readability ko khatam kar dete hain.

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
++gameCounter
console.log(gameCounter);