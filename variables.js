const accountId = 123123;
var accountName = "Rhythm";
let balance = 100;

// accountId = 23;
// console.log(accountId);

// Output
// TypeError: Assignment to constant variable.

accountName = "Arjun";
console.log(accountName);
// No Error

balance = 355;
console.log(balance);

/*
Prefer not to use var
becasue of issue in block scope & function scope
*/