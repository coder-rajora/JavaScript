const accountId = 144553
let accountEmail = "rishabh@gmail.com"
var accountPassword = "12345"
accountCity= "Jaipur"
let accountState;

accountEmail = "hc@rr.com"
accountPassword = "45454545"
accountCity = "Delhi"

console.log(accountId);

/*
    Prefer not to use var because of issue in block scope and functional scope.  
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

