/* START CODE UNDER THIS LINE */
//pulse check 
//q1
if (10 <= 10){
    console.log(2);
}
if (5 > 3) {
    console.log(12);
}
if (5 > 10){
    console.log(112);

}
if (5 > 10){
    console.log(122);

}else{
console.log(142);

}
if (2 < 3 && 7 > 10){
    console.log(55);
}else{
console.log(214);
}
if("hello" === "hello"){
console.log("hi");
}
//q2
true && true && false; // false (and love it false)
true || (true && false);//true(or love true)
5 === 2 || 1 < 10;//true(or love true)
(!false && true) || (!true && true); 
(true) || (false); //true(or love true)
//q3
const legalAge = function (age){
 console.log(age>=18);   
};
legalAge(22);
legalAge(18);
legalAge(16);
//q4
const isItMyName = function (name){
console.log(name==="rashed");
}
isItMyName("rashed")
isItMyName("rashid")
isItMyName("amer")
//q5
const positiveOrNegative = function (number){
    if (number>=1) {
        return number+" is postive"
    }else if (number<=-1) {
        return  number+" is negative"
    }else{
        return number+" is neither positive nor negative"
    }
    }
    console.log(positiveOrNegative(10));
    console.log(positiveOrNegative(-10));
    console.log(positiveOrNegative(0));
//practice 
//q1
const toLowerOrUpperCase = function (string, strCase){
if(strCase==="lower"){
return string.toLowerCase();

} else if(strCase==="upper"){
return string.toUpperCase();

}else{
    return "String case must be lower or upper"
}
}
 console.log(toLowerOrUpperCase("rashed","upper"));
 console.log(toLowerOrUpperCase("RaShEd","lower"));
 console.log(toLowerOrUpperCase("rashed","mixed"));
 //q2
 const howLong = function (word) {
    const numword= word.length
 if (numword <= 5) {
    return "short"
 }   else if (numword >=5 && numword<= 8 ) {
    return "medium"
 }else if (numword <=9 && numword <=13 ) {
   return "long"
 }else{
return "very long"
 }
}
console.log(howLong("rasha"));
console.log(howLong("wqfgsaaf"));
console.log(howLong("wqfgsafff"));
console.log(howLong("wqfgsaafasffffffafsfsafaf"));
//q3
const startsWith = function (string, character){
 const  ff=  string[0].toLowerCase()
 const dd= character.toLowerCase()
if (ff>=dd) {
 return ff===dd
}else if (ff<=dd) {
    return ff===dd
}else{
    "busy"
}
{

}
}
console.log(startsWith("rashed","r"));
console.log(startsWith("Rashed","r"));
console.log(startsWith("saif","r"));
console.log(startsWith("mohammad","r"));
//q4
const endsWith = function (string, character) {
if (character==="true") {
    return string.endsWith(character)
}else if (character!=="false") {
    return string.endsWith(character)
}else{

}
}
console.log(endsWith("Rashed","R"));
console.log(endsWith("Rashed","d"));
console.log(endsWith("Rashed","s"));
console.log(endsWith("hello","o"));
//q5
const deposit = function (amount){
    if (typeof amount !== "number") {
     return " enter a number"
    }else if (amount<=0) {
     return "enter a postive number"
    }else{
     return amount
    }
}
  console.log(deposit(100));
  console.log(deposit(-100));
  console.log(deposit("199"));
  //q6
  const oddOrEven = function (number) {
if (number % 2 === 0) {
    return  number+" is even"
}else if (number % 2 !== 0) {
    return number+" is odd"
}
  }
  console.log(oddOrEven(1));
  console.log(oddOrEven(4));
  console.log(oddOrEven(47));
  console.log(oddOrEven(427));
  console.log(oddOrEven(431329));
  console.log(oddOrEven(4244244234));
  //q7 
  const stringCase = function (string){
 const stringUpper= string.toUpperCase()
 const stingLower= string.toLowerCase()

 if (string===stringUpper) {
    return "all upper case"
 }else if (string===stingLower) {
    return "all lower case"
 }else{
    return "mix case"
 }
  }
  console.log(stringCase("rarshfdg"));
  console.log(stringCase("RASHEDA"));
  console.log(stringCase("RASheda"));
//q8
const isLeapYear = function (year){
    if ((year % 4 ===0 && year % 400 ===0 )|| year %100 !==0) {
        return true
    }else{
        return false
    }
}
console.log(isLeapYear(2000));
console.log(isLeapYear(20530));
console.log(isLeapYear(204354));
console.log(isLeapYear(20543));
console.log(isLeapYear(2004));
console.log(isLeapYear(2005));
console.log(isLeapYear(3000));
console.log(isLeapYear(2600));
//q9
const login_v01 = function (username, password){
if (username.length >= 6 && password.length >= 8) {
    return "login successful"
} else{
    return "login failed"
}   
}
console.log(login_v01("rarsf","436346"));
console.log(login_v01("rarsfafaf","142422852"));
console.log(login_v01("rar","1424"));
//q10
const login_v02 = function (username, password){
    if (username.length >= 6 && password.length>=8) {
        return " login successful"
    }else{
        return " login failed"
    }
}
console.log(login_v02("fsafsaf","fsfasfsaf"));
console.log(login_v02("JOHN_DOE", "koljgwEA"));
console.log(login_v02("jane_doe", "12345678"));
console.log(login_v02("jane_doe", "koljgwEA"));
//q11
const login_v03 = function (username, password) {
    const username1="john_doe"
    const password1="12345678"
if (username.length >= 6 && password.length>= 8) {
  return "login successful"  
} else if (username.length < 6) {
 return "username must be more than 6 characters long"   
}else if (password.length < 8) {
    return "password must be at least 8 characters long"
}   else if (username === username1) {
    return "username doesn't exist"
}else if (password<=password1) {
    return "wrong password"
} else{

}
}
console.log(login_v03("john_doe", "koljgwEA"));
console.log(login_v03("jane_doe", "12345678"));
console.log(login_v03("john", "12345678"));
console.log(login_v03("jane_doe", "123456"));
console.log(login_v03("MrPotato", "12345678"));
