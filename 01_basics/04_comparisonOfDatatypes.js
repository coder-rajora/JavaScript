//console.log(2 > 1);
//console.log(2 >= 1);
//console.log(2 < 1);
//console.log(2 == 1);
//console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);  //inn sab comparisons mai confusion rehta hai , == aur baaki comparison operators ka kaam karne ka tareeka alag hai, isliye kahin true aa raha hai aur kahin false aa raha hai , jabki null ko 0 hi maana jaata hai isme tab bhi.
console.log(null >= 0);

console.log(undefined == 0);  //inn teeno statements mai hamesha output false hi milta hai.
console.log(undefined > 0);
console.log(undefined < 0);

//ab aata hai strict check jo ki hai === , ye sirf compare hi nahin datatype bhi check karta hai

console.log("2" === 2); //false dega output kyunki same datatype hi nahin hain ye dono.