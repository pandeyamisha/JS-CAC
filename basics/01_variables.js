const userAcctId =1;
let  userAcctEmail ="abc@xyz.com";
var userAcctPasswrd="qwerty";
userAcctCity="Jaipur";
//userAcctId=3; not allowed
console.log("new account Id",userAcctId)
// console.log("new account mail",userAcctId)
// console.log("new account password",userAcctId)
// console.log("new account city",userAcctId)
userAcctEmail="qqqq.wwww@abc.com";
userAcctPasswrd="piano@123";
userAcctCity="Mainpuri";
/*Prefer not to use Var for declarations due to block and functional issues */
console.table([userAcctEmail,userAcctPasswrd,userAcctCity])
