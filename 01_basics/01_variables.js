const accountId = 12345
let accountEmail = "ritu@google.com"
var accountPassword = "123"
accountCity = "Chennai"   //not recommended; 
//without writing any variable we can allocate the memory for the variable name

let accountState   //undefined; coz we have not initialised bt only declared the variable

// accountId = 2  
accountEmail = "hc@hc.com"
accountPassword="567"
accountCity = "Bengaluru"
console.log(accountId);

/*
prefer not to use var
coz of issue in block and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])