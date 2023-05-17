// ///////////Chap01 Alerts//////////////

// ////////////Q#01

// // 1.

// var firstName = "Ahmed"
// alert(firstName);

// // 2.

// var lastName = "Khan"
// alert(lastName);

// //3.
//  var eMail = "alikhan@nomail.com"
//  alert(eMail);

//  //4.
//  var phoneNumber = "03021232546"
// alert(phoneNumber);

// //5.
// var passWord= "123XyZ"
// alert(passWord);


// ////////////Q#02

// alert("You're learning JavaScript!");

// /////////Q#03

// var message = "Programming is learned by writing programs."
// alert(message);

// //////////////////Chap#02 Variables for String//////////////////


// ////1

// var anyVar;

// ////2
// var a ;
// a= "no matter what, just move on and let it go!"

// ////3

// var teamName= "The Coders"
// alert(teamName);


// /////4
// var bestMan = "Charlie";
// bestMan = "John"
// // console.log(bestMan);


// //////////Chap#03 Variables for numbers//////////

// // 1
// var caseQty;
// //2
// caseQty = 144;
// //3
// var num = "9";
// //4
// var b;
// b= caseQty + num;
// //5
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// //6
// var c;
// c= 2;
// c = 2+3;

// ////////////////Chap#04 Variable names legal & illegal ////
// //1
// var productCost = 3.45;
// //2
// var nameOfBrand;
// //3
// var _a = 2;
// //4
// var fullName = "Sumaiya" + "Moon";
// //5
// //Legal: _ (can include underscore), camelCase, val123, can include $
// //illegal: 123val, CapitalfirstWord, -oranyotherOperator &noSpecialChar , 123 not number

// /////////////////////Chap#05 Math Expressions I //////////


// //1
// // % modulus or mod gives the  remainder when one number is divided by another

// //2
// var numChp5 = 20 % 6;
// console.log(numChp5);

// //3
// var largeNum = 1000*2000;

// //4
// var x = 28;
// var y= 64;
// var z = y-x;

// //5
// var _name = 40%3;

// //6
// alert(2*2);

// ////////////////////Chap#06 Math Expressions II//////////


// //1


// //2
// var x=100;
// --x;

// //3
// var x=50;
// var y=x++;
// alert(y);

// //4
// y=50;
// z=--y;
// alert(z);

// //5
// // var newNum = num = num - 1;

// //6
// // var newValue = originalValue = originalValue + 1;

// //7
// var aNum =2;
// aNum++;
// alert(aNum);

// ////////////////Chap#07 Math Expression III/////////////

// //1
// var calculatedNum1 = 2 + (2 * 6);
// console.log(calculatedNum1);

// //2
// var calculatedNum2 = (2 + 2) * 6;
// console.log(calculatedNum2);

// //3
// var calculatedNum3 = (2 + 2) * (4 + 2);
// console.log(calculatedNum3);

// //4
// var calculatedNum4 = ((2 + 2) * 4) + 2;
// console.log(calculatedNum4);

// //5
// var resultingCost1 = (2+2)*(4+10); //56

// //6
// var resultingCost2 = 2+(2*4)+10; //20

// //7
// var result = 4 / (2*4) //0.5

// ///////////////Chap#08 Concatenating Text Strings//////

// //1
// var num = "2" + "2"; //22

// //2
// message = ("Hello," + "Dolly");
// alert(message) //Hello Dolly;

// //3
// alert("33"+3); //333

// //4
// alert("Pakistan" + "Zindabad");

// //5
// var m = "a" + 7;

// //6
// var o = "xyz";
// var p = "abc";
// var resultQ = o + p ;
// var q = resultQ;

// //////////////////Chap#09 Prompts/////////////

// //1
// var inp1  = prompt("Enter FirstName");

// //2
// var inp2 = prompt("Country?","China");

// //3
// var yourName = prompt("Enter Your Name");

// //4
// var userInputChp09 = prompt("Please enter your name:", "John");

// //5
// var msgInp = "message";
// var defResponse = "response";
// var inp4 = prompt(msgInp,defResponse);

// //6
// var inp5 = prompt("message","default response");
// alert(inp5);


// /////////////////Chap#10 if Statements///////////

// //1
// var city = "Karachi";
// if (city == "Karachi") {
// console.log("The City OF Lights");
// }

// //2
// xchp10=1
// ychp10=1
// if(xchp10===ychp10){
// var inputChp10 = prompt("Value of z?");
// var varChp10= inputChp10;
// }


// //3
// var zipCode = "10010" 
// if (zipCode == "10010"){
//     alert("Karachi")
// }
// else{
//     alert("Please write the correct city");
// }

// //4
// var x10 = 1;
// var l = 2;
// if(l==2){
//     l = x10;
//     alert(l);
// }

// ////////////////Chap#11 Comparison Operators////////////

// //1
// var firstVar = 2;
// var secondVar = 2;
// if(firstVar !== secondVar){
//     alert("They are not equal");
// }

// //2
// if(firstVar >= secondVar){
//     alert(firstVar + " is greater than or equal to "+ secondVar);
// }

// //3
// var chp11_var = 15;
// if(chp11_var !== 14){
//     chp11_var = 14;
// }

// //4
// flagValue = false;
// if(14 !== 15){
// flagValue = true ;
// alert("Congratulations");
// }

// //5
// var fName = prompt("first Name");
// fName = fName.toLowerCase();
// if(fName !== "bisma"){
//     // console.log("unequal");
//     alert("No match")
// }


// ////////////////////Chap#12 if...else & else if statements////////////

// //1
// var variable1 = 10;
// var variable2 = 5;

// if (variable1 >= variable2) {
//   alert("Variable 1 is greater than or equal to Variable 2.");
// } else {
//   alert("Variable 1 is less than Variable 2.");
// }



// //2
// var marksSubj1 = +prompt("Enter Marks of Subj 1");
// var marksSubj2 = +prompt("Enter Marks of Subj 2");
// var marksSubj3 = +prompt("Enter Marks of Subj 3");
// var marksObt = marksSubj1 + marksSubj2 + marksSubj3;

// var totalMarks = +prompt("Total Marks");
// var percentage = (marksObt / totalMarks)*100;
// if(percentage>=80 && percentage<=100){
//     alert("A+")
// }
// else if(percentage >=70 && percentage<80){
//     alert("A")
// }
// else if(percentage >=60 && percentage<70){
//     alert("B")
// }
// else if(percentage >=50 && percentage<60){
//     alert("C")
// }
// else if(percentage >=33 && percentage<50){
//     alert("D")
// }
// else if(percentage >=0 && percentage<33){
//     alert("F")
// }



// //3
// j = 10
// if (j === 10) {
//     alert("j is 10");
// }
// else{
//     alert("Correct Value of j is " + j)
// }   

// //4
// var inputCity = prompt("Enter City");
// inputCity=inputCity.toLowerCase();
// if(inputCity=== "karachi"){
//     alert("Karachi")
// }
// else if(inputCity === "lahore"){
//     alert("Lahore")
// }
// else if(inputCity === "islamabad"){
//     alert("Islamabad")
// }
// else if(inputCity === "quetta"){
//     alert("Quetta")
// }
// else{
//  alert("City XYZ entered")
// }

// /////////////////Chap#13 Testing Sets Of Conditions///////////////////

// //1
// var a , b , c , d , e;
// a = b;
// c = d;
// if(a==b && c==d){
//     alert("Checked")
// }
// //2
// a=b;
// c=e;
// if(a==b && c == d  || a== b || c==d ){
//     alert("Clear")
// }


// //3
// var inpName = prompt("Enter Name");
// inpName = inpName.toLowerCase();
// if(inpName === "arsalan" || inpName === "hamza"){
//     var inpAge = +prompt("Enter Age");
//     if(inpAge < 60){
// alert(inpName + " is " + inpAge + " years old ");
//     }
//     else{
//         alert("Invalid Age");
//     }
// }
// else{
//     alert("Invalid Input");
// }

// //4
// var myVal1 = 54
// var myVal2 = 62
// if(myVal1>myVal2 || myVal1<myVal2){
//     alert(myVal1 +" is either > or < than "+ myVal2);
// }

// //5
// var myFirstName = "Sumaiya";
// var myLastName = "Moon";
// var myFirstNameInput = prompt("Enter first Name","Sumaiya");
// var myLastNameInput  = prompt("Enter Last Name","Moon");
// if(myFirstName === myFirstNameInput && myLastName == myLastNameInput){
// alert("Matched")
// }

// ///////////////////Chap#14 if statements nested/////////////////////

// //1
// let password = "example123";

// if (password !== "") {
//   if (password.length <= 5) {
//     alert("Password must be greater than 5");
//   } else {
//     alert("OK");
//   }
// }


// //2
// var a=1
// c="Max"
// if (a === 1) {
//     if (c === "Max") {
//       alert("OK");
//     }
//   }

//   //3
//   if (a === 1 && c === "Max") {
//     alert("OK");
//   }

//   //4
// var num1 = 10;
// var num2 = 10;

// if (num1 === num2) {
//   if (num1 <= num2) {
//     alert("Test passed!");
//   }
// }

// //////////////////////////Chap#15 Array I ///////////////////

// //1
// var emptyArray = [];
// //2
// var arrayWithOneElement = ["Hello"];

// //3
// var alphabet = ["h", "i", "j", "k"];
// alert(alphabet[2]);

// //4
// var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
// var arrayLength = alphabet.length;
// alert(arrayLength); 

// //5
// var myArray = ["First Element"];
// myArray[1] = "Second Element";
// alert(myArray[1]);




// /////////////////////////////Chap#16 Array II /////////////////

// //1
// var Arr = ["Element"]
// Arr.push("Element 2");
// alert(Arr[1]);

// //2
// var Alphabet=["h","i","j","k"]
// Alphabet.pop();
// alert(Alphabet);


// //3
// var Alphabet=["h","i","j","k"]
// Alphabet.push("l");



// ///////////////////////Chap#16 Array III///////////////////////

// //1
// var sizes =  ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift();
// //2
// sizes.unshift(32,40,11);

// //3
// var aRRay = ["1element"];
// aRRay.unshift("2element");
// alert(aRRay[0]);

// //4
// sizes.splice(2,0,"L");

// //5
// regSize = sizes.slice(0,3);

// //6
// var pets = ["dog", "cat", "ox", "duck", "frog"]
// pets.splice(1,3,"horse","lion");

// //7
// var pets = ["dog", "cat", "ox", "duck", "frog"]
// pets.splice(1,2);

// //8
// pets.shift();
// alert(pets);


//////////////////////////Chap #17 - Chap#20 For Loops ////////////////

// //1
// for(var i =0 ; i<10 ; i++){
//     console.log(i + "\n")
// }


// //2
// for(i=0 ; i<=11 ; i++){
//     console.log("Loop Iteration: " + (i+1));
// }

// //3
// // for var i = 0 i <= 4 i++
// for(var i=0 ; i<=4 ; i++){

// }


// //4
// for(var j=0 ; j<100 ; j++){
//     console.log("Loop Iteration : " +  (j+1));

// }

// //5
// for(var i=8 ; i>5 ; --i){
//     console.log(i)
// }

// //6
// var arrAy = [1,2,3,4];
// var vaRiable = arrAy.length;

// //7
// var flag = false;

// //8
// var pets = ["dog", "cat", "ox", "duck", "frog"]
// for(var i=0; i<pets.length ; i++){

// }


// //9
// for(var x=0; x<10 ; x++){
//     console.log(x);
// if( x === 1 ){
//     alert("1");
//     break;
// }

// }


// //10
// var userNames = [];
// var userFirstNameInput = prompt("Enter First Name");
//  userNames.push(userFirstNameInput);
// for(var s=0; s<userNames.length ; s++){
//     if(userNames[s]===userFirstNameInput){
//         alert("Enter")
//     }
//     else{
//         alert("Please write the correct user name.")
//     }
// }

/////////////////////////////////////////////////////

var userNames = ["Sumaiya", "Sania", "Madiha", "Samama"];
var firstNamesarr = [];
var userFirstNameInput = prompt("Enter First Name");
firstNamesarr.push(userFirstNameInput);

var matchFound = false;

for (var s = 0; s < userNames.length; s++) {
  if (userNames[s] === userFirstNameInput) {
    matchFound = true;

    break;
  }
}

if (matchFound) {
  alert("Enter");
} else {
  alert("Please write the correct user name.");
}

// //11
// var inputList = prompt("Enter from list");
// var list= ["tree", "cat", "dog" ,"pen" , "Seesaw" , "book" , "grass"]
// var matchFound = false;
// for (var f = 0; f < list.length; f++) {
//  if (inputList === list[f]) {
//  alert("Match found");
//  matchFound = true;
//  break;
//  }
// }
// if (!matchFound) {
//     alert("No match found");
//   }



// //12
// var firstArr = ["a", "b", "c", "d", "e", "f"];
// var secondArr = [1, 2, 3, 4, 5, 6];
// for(var r = 0 ; r< firstArr.length; r++){
// for( var v=0; v< secondArr.length; v++){
//     console.log(firstArr[r]+secondArr[v]+"\n")
// }
// }








































