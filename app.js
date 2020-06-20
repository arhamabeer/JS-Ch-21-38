

//  Chap # 21-25

// Task 1
var fname = prompt("Enter First Name");
var lname = prompt("Enter Last Name")
var fullName = fname + lname;
alert("Hello " + fullName);



// // Task 2
var favMob = prompt("Enter your Favorite Mobile Phone Model");
var strLen = favMob.length;
alert("Your Favorite Mobile is: " + favMob + "\nLength of String: " + strLen);



// Task 3
var word = "Pakistani";
var indNum = word.indexOf("n");
alert("String: " + word + "\nIndex of n: "+ indNum);



// Task 4
var word = "Hello World";
var indNum = word.lastIndexOf("l");
alert("String: " + word + "\nLast Index of l: "+ indNum);



// Task 5
var word = "Pakistani";
var indChar = word.charAt(3);
alert("String: " + word + "\nCharacter at index 3: "+ indChar);



// Task 6
var fname = prompt("Enter First Name");
var lname = prompt("Enter Last Name")
var fullName = fname.concat(" " + lname)
alert("Hello " + fullName);



// Task 7
var city = "Hyderabad";
var indNum = city.indexOf("Hyder");
var fText = city.slice(0,indNum);
var repCity = "Islam";
var lText = city.slice(indNum + 5);
alert("City: " + city + "\nReplaced City: " + fText + repCity + lText);



// Task 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var RepMessage = message.replace(/and/g , "&");
alert("Message: " + message + "\nReplaced Message: " + RepMessage);



// Task 9
var str = "472";
var sType = "String";
var num = parseInt(str);
var nType = "Number";
document.write("Value: " + str + "<br>Type: "+ sType + "<br>Value: " + num + "<br>Type: "+ nType)



// Task 10
var word = prompt("Enter some word");
var Uword = word.toUpperCase();
alert("Input: " + word + "\nConverted: " + Uword);



// Task 11
var word = prompt("Enter some word");
var fLetter = word.slice(0,1);
var upperLetter = fLetter.toUpperCase();
var lLetter = word.slice(1);
var Uword = upperLetter.concat(lLetter);
alert("Input: " + word + "\nConverted: " + Uword);



// Task 12
var num = 35.36;
var str = num.toString();
var ind = str.indexOf(".");
var fstr = str.slice(0,ind);
var lstr = str.slice(ind+1);
var repStr = fstr.concat(lstr);
alert("Number: " + num + "\nString: " + repStr)



// Task 13
var username = prompt("Enter Username")
var i,c=0;

for(i=0;i<username.length;i++){
    if(username[i] === String.fromCharCode(33)){
        c++;
        break;
    }
    else if(username[i] === String.fromCharCode(64)){
        c++;
        break;
    }
    else if(username[i] === String.fromCharCode(46)){
        c++;
        break;
    }
    else if(username[i] === String.fromCharCode(44)){
        c++;
        break;
    }
    else{
        c=0;
    }
}
if(c > 0){
    alert("Please enter a valid username...");
}
else{
    alert("Your Username is: " + username);
}



// Task 14
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt("Enter item...");
var user = input.toLowerCase();
var ind;
var item;
var c=0;

for(var i = 0; i < arr.length ; i++){
    if(user === arr[i]){
        c++;
        item = arr[i];
        ind = i;
        break;
    }
    else{
        c = 0;
    }
}

if(c > 0){
    alert(item + " is available at index " + ind + " in our bakery");
}

else{
    alert(user + " is not available in our bakery");
}



// Task 15
var pass = prompt("Enter Password");
var c=0;
var s = 0;
var n=0;

if(pass.length < 6){
    alert("Please enter at least 6-digit Password");
}

var firstLetter = pass.charAt(0);
if(firstLetter >= 0 && firstLetter <= 9){
    alert("Password cannot be begin with a number. Please enter a calid password.");
}

for(var i = 0 ; i < pass.length ; i++){
    if(pass[i] >= String.fromCharCode(65) && pass[i] <= String.fromCharCode(90)){
        c++;
    }
    else if(pass[i] >= String.fromCharCode(97) && pass[i] <= String.fromCharCode(122)){
        s++;
    }
    else if(pass[i] >= 0 && pass[i] <= 9){
        n++
    }
    else{
        c=0;
        s=0;
        n=0;
    }
}
if(c > 0 && s > 0 && n > 0){
    alert("saved");
}
else{
    alert("Please enter capital and small letters with numbers in your password")
}



// Task 16
var str = "University Of Karachi";
var spl =  str.split("");
for(var i = 0; i <= spl.length - 1; i++){
    document.write(spl[i] + "<br>");
}


// Task 17
var inp = prompt("Enter")
var ind = inp.length - 1;
var lChar = inp.charAt(ind);
alert("Input: " + inp + "\nLast Character: " + lChar);



// Task 18
var str = "The quick brown fox jumps over the lazy dog";
var lowStr = str.toLowerCase();
var ind = lowStr.replace(/the/g , "$");
var c=0;

for(var i=0; i<ind.length;i++){
    if(ind[i] === "$"){
        c++;
    }
}
alert("Text: " + str + "\nThere are " + c + " occurance(s) of word 'the'.");





//  Chap # 26-30

// Task 1
var num = prompt("Enter positive number");
var rOf = Math.round(num);
var ceil = Math.ceil(num);
var floor = Math.floor(num);

document.write("Number: " + num);
document.write("<br>Round OF: " + rOf);
document.write("<br>Ceil: " + ceil);
document.write("<br>Floor: " + floor);



// Task 2
var num = prompt("Enter Negative number");
var rOf = Math.round(num);
var ceil = Math.ceil(num);
var floor = Math.floor(num);

document.write("Number: " + num);
document.write("<br>Round OF: " + rOf);
document.write("<br>Ceil: " + ceil);
document.write("<br>Floor: " + floor);



// Task 3
var num = prompt("Enter number");
var abs = Math.abs(num);
alert("Number: " + num + "\nAbsolute: " + abs);



// Task 4
var dice = Math.random() * 5;
var round = Math.round(dice)
alert("Random dice value is: " + round);



// Task 5
var toss = Math.random() * 2;
var floor = Math.floor(toss);
document.write(floor);
if(floor === 0){
    alert(floor + "\nRandom value of toss: Heads");
}
else{
    alert(floor + "\nRandom value of toss: Tails");
}



// Task 6
var random = Math.random() * 101;
var round = Math.round(random)
alert("Random number is: " + round);



// Task 7
var weight = prompt("Enter your weight");
var num = parseInt(weight);
alert("Your Weight is: " + num + " kilograms");



// Task 8
var num = prompt("Enter random number between 1 to 10");
var random = Math.random() * 11;
var round = Math.round(random)
alert(round)
if(num == round){
    alert("Congrats you won!");
}
else{
    alert("Try Again!");
}




// Chap # 31-34


//Task 1
var date = new Date();
alert(date);



// Task 2
var curr = new Date();
var mon = curr.toString();
var mon1 = mon.slice(4,7)

if(mon1 === "Jan"){
    alert("Current Month: January")
}
else if(mon1 === "Feb"){
    alert("Current Month: February")
}
else if(mon1 === "Mar"){
    alert("Current Month: March")
}
else if(mon1 === "Apr"){
    alert("Current Month: April")
}
else if(mon1 === "Jun"){
    alert("Current Month: June")
}
else if(mon1 === "Jul"){
    alert("Current Month: July")
}
else if(mon1 === "Aug"){
    alert("Current Month: August")
}
else if(mon1 === "Sep"){
    alert("Current Month: September")
}
else if(mon1 === "Oct"){
    alert("Current Month: Octuber")
}
else if(mon1 === "Nov"){
    alert("Current Month: November")
}
else if(mon1 === "Dec"){
    alert("Current Month: December")
}




// Task 3
var date = new Date();
var str = date.toString();
var day = str.slice(0,3);
alert("Today is: " + day);



// Task 4
var date = new Date();
var str = date.toString();
var day = str.slice(0,3);

if(day === "Sat" || day === "Sun"){
    alert("It's Fun Day!")
}



// Task 5
var date = new Date();
var str = date.toString();
var day = str.slice(8,10);

if(day < 16){
    alert("First 15 days of the month");
}
else{
    alert("Last days of the month")
}



// Task 6
var curr = new Date();
var mili = curr.getTime();
var min = mili / (1000*60);
alert("Current Date: " + curr + "\nElapsed milliseconds since January 1970: " + mili + "\nElapsed minutes since January 1970:" +min)




// Task 7
var date = new Date();
var str = date.toString();
var time = str.slice(16,18);
if(time >= 00 && time < 12){
    alert("It's AM");
}
else{
    alert("It's PM");
}



// Task 8
var lDate = new Date("Dec 31, 2020");
var str = lDate.toString();
alert("Later Date: " + str)



// Task 9
var date = new Date("June 18, 2015");
var curr = new Date();
var dateMili = date.getTime();
var currMili = curr.getTime();
var diff = currMili - dateMili;
var diffDay = diff / (1000*60*60*24);
var accDay = Math.floor(diffDay);
alert(accDay + " days have passed since 1st Ramadan 2015");




// Task 10
var date = new Date("Jan 01, 2015");
var curr = new Date();
var dateMili = date.getTime();
var currMili = curr.getTime();
var diff = currMili - dateMili;
var diffSec = diff / (1000);
var accSec = Math.floor(diffSec);
alert("On the reference date " + curr + ", " + accSec + " seconds had passed since the beginning of 2015");



// Task 11
var date = new Date();
var str = date.toString();
var edit = str.slice(16,18);
var bef = edit - 01;
var fDate = str.slice(0,15);
var lDate = str.slice(18)
alert("1 hour ago, it was " + fDate + " " + bef + " " + lDate);



// Task 12
var today = new Date();
var d = new Date();
var pastYear = d.getFullYear() - 100;
d.setFullYear(pastYear);
alert("Today: " + today + "\n100 years ago: " + d);



// Task 13
var dob = new Date("Sep 4, 1999");
var dobMili = dob.getTime();
var today = new Date();
var todayMili = today.getTime();
var diff = todayMili - dobMili;
var diffAge = diff / (1000*60*60*24*30*12);
var accAge = Math.floor(diffAge);
var year = 2020 - accAge;
alert("Your age is: " + accAge + "\nYour birth Year is: " + year);



// Task 14
var name = prompt("Enter Customer Name");
var month = prompt("Enter billing month");
var unit = prompt("Enter Number of Units");
var charges = 16;
var netAmount = unit * charges;
var surCharge = 350;
var latePayment = netAmount + surCharge;

document.write("Customer name: " + name + "<br>");
document.write("Month: " + month + "<br>");
document.write("Number of Units: " + unit + "<br>");
document.write("Charges per Unit: " + charges + "<br><br>");
document.write("Net Amount Payable (within due date): " + netAmount +"<br>");
document.write("Late Payment  Surcharge: " + surCharge + "<br>");
document.write("Gross Amount Payable (after due date): " + latePayment);





// Chap # 35-38

// Task 1
var date;

function dateTime(){
    date = new Date();
    alert(date);
}
dateTime();



// Task 2
var fname, lname;
function greet(){
    fname = prompt("Enter First Name");
    lname = prompt("Enter last Name");
    alert("Welcome " + fname + " " + lname);
}
greet();



// Task 3
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var sum;

function sum(a,b){
    sum = a+b;
    return sum;
}
alert(sum(num1,num2));



// Task 4
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var opr = prompt("Enter Operation");

function calc(a,opr,b){
        if(opr === "+"){
            return a + b;
        }
        else if(opr === "/"){
            return a / b;
        }
        else if(opr === "-"){
            return a - b;
        }
        else if(opr === "*"){
            return a * b;
        }
        else{
            return "Incorrect Operator"
        }
    }
    
    var result = calc(num1,opr,num2);
    alert(result);



// Task 5
var num = prompt("Enter Number");

function square(a){
    return a*a;
}

var res = square(num);
alert("Square: " + res)




// Task 6
var n =prompt("Enter Number");
function factorial(n){
    var ans = 1;
    if (n == 0 || n == 1){
        return ans;
    }
    else{
        for(var i = n; i >= 1; i--){
        ans = ans * i;
        }
        return ans;
    }
}

ans = factorial(n)
alert("The factorial of " + n + " is " + ans);





// Task 7
var snum = prompt("Enter start number");
var lnum = prompt("Enter end number");

function count(a,b){
    for(var i = a ; i <= b ; i++){
        document.write(i + " ");
    }
}
count(snum,lnum);



// Task 8
var base = prompt("Enter base");
var perp = prompt("Enter Perpendicular");
var hyp;
function calculateHypotenuse(a,b){
    var bs;
    var hs;
    function sqr(x,y){
        bs = x*x;
        hs = y*y;
    }
    sqr(a,b)

    hyp = bs * hs;
    return hyp;
}

var res = calculateHypotenuse(base,perp);
alert("Hypotenuse: " + res);



// Task 9
    // Method 1
var w = 12;
var h = 6;
function area(a,b){
    return a*b;
}
    alert("Area of the Rectangle is: " + area(w,h));


    // Method 2
var w = prompt("Enter width");
var h = prompt("Enter height");

function area(a,b){
    return a*b;
}
alert("Area of the Rectangle is: " + area(w,h));



// Task 10
var word = prompt("Enter any Word");
function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return alert("Not a Palindrome");
        }
    }

    return alert("Palindrome");
}
var res = palindrome(word);


// Task 11 
var word = prompt("Enter String");

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' '); 
}
 
alert(titleCase(word));



// Task 12
var str = prompt("Enter");    
function longest(a)
{
  var arr = a.split(" ");
  var result = arr[0];

  for(var x = 1 ; x < arr.length ; x++)
  {
    if(result.length < arr[x].length)
    {
    result = arr[x];
    } 
  }
  return result;
}
alert(longest(str));



// Task 13
var str = prompt("Enter String");
var letter = prompt("Enter letter");
var lowStr = str.toLowerCase();
var lowLet = letter.toLowerCase();
var c=0; 

function check(a,b){
    for(var i=0; i<a.length;i++){
        if(lowStr[i] === lowLet){
            c++;
        }
    }
    return c;
}
var res = check(lowStr,lowLet);
alert("Text: " + str + "\nThere are " + res + " occurance(s) of letter " + letter + " in the String");




// Task 14
var rad = prompt("Enter Radius");

function calcCircumference(r){
    var circum = 2 * 3.142 * r;
    alert("The circumference is " + circum);
}

function calcArea(r){
    var area = 3.142 * r * r;
    alert("The area is " + area);
}

calcCircumference(rad);
calcArea(rad);