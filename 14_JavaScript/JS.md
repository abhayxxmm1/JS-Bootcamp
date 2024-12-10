# Inside dev tools [F12] in  Sources -> Snippets

## 77.Data types
```JavaScript

5*4
alert(5*4);
typeof(20);
alert( typeof(5*4/45));
alert( typeof(true));
```

## 78.Variables
```JavaScript

var name=prompt("what is your name?");
prompt ("how are you " +name+",welcome to my website");
var gamelevel="1";
gamelevel +=1;



var name="Abhay";
alert (name);
name="I Win";
alert (name);
```

## 78.1 game
```JavaScript

alert ("||Welcome|| to *truth or dare*, !Danger-->Kind hearted people should not try to play this game")
var PLAYER=prompt("ENTER YOUR NAME","FULL NAME")
PLAYER=PLAYER.toUpperCase()
//PLAYER WHAT WOULD YOU CHOSE TRUTH OR DARE
var CHOISE=prompt("SO," + PLAYER + " DO YOU EJACULATE", "YES OR NO" )
```

## 82. String Concatenation
```JavaScript

var MSG="HELLO"
var NM="KITTY"
alert(MSG+" THERE, "+NM)
```

## 83.String Lengths and Retrieving the Number of Characters
```JavaScript

var X=400,Z;
var TWT=prompt("WRITE A TWEET (MAX CHAR " + X + " ALLOWED)" );
Z=X.length=X-TWT.length;
alert ("YOU HAVE WRITTEN " + TWT.length + " CHAR AND REMAINING CHAR ARE " + Z);

var NM='ABHAYFK'
alert(NM.length)
```

## 84.Slicing and Extracting Parts of a String
```JavaScript

/*var X=200,Z;
var TWT=prompt("WRITE A TWEET (MAX CHAR " + X + " ALLOWED)" );
Z=X.length=X-TWT.length;
alert ("YOU HAVE WRITTEN " + TWT.length + " CHAR AND REMAINING CHAR ARE " + Z);
alert (TWT.slice(0,200))
*/
var X=40;
var TWT=prompt("WRITE A TWEET (MAX CHAR " + X + " ALLOWED)");
var TWT=prompt("YOU HAVE WRITTEN ||" +TWT.length+ "|| **" + TWT.slice(0,X) + "** THE LIMIT IS " +X);
```

## 85.CHANGING CHASING
```JavaScript

var X=prompt("WRITE SMTH")
// alert(X.toUpperCase() +" "+ X.toLowerCase())
// X="ye achha tha guru";
Y=X.slice(0,1) 
Z=X.slice(1,X.length)
// alert(X=Y.toUpperCase() + Z.toLowerCase() );
alert("HELLO " +(X=Y.toUpperCase() + Z.toLowerCase()) );
```

## 87.Arithmatic and modulo
```JavaScript

//Dog age to human age 
var dogAge=prompt("write the dogAge")
var humanAge=((dogAge-2)*4)+21
alert("your dog is " + humanAge + " years old in human age")
```

## 88.Functions: creating and calling them
```JavaScript

function getoff() {
console.log("stand up")
console.log("climb right")
console.log("walk forward")
console.log("get down")
console.log("move right")
console.log("got to door")
}
getoff();


/* 
https://stanford.edu/~cpiech/karel/ide.html

function main(){
   //your code here
   n();
   n();
   n();
   n();
   m();
   return();
}
function m(){
 move();
 move();
 move();
 turnLeft();
 move();
 move();
 move();
 turnLeft();
 move();
 move();
 turnLeft();
 move();
 move();
 turnLeft();
 move();
 turnLeft();
 move();
}
function n(){
   //your code here
   move();
   move();
   move();
   move();
   turnLeft();
   move();
   move();
   move();
   move();
   turnLeft();
}
function return(){
   turnLeft();
   turnLeft();
   move();
   turnLeft();
   move();
   turnLeft();
   move();move();turnLeft();
   move();move();turnLeft();
   move();move();move();turnLeft();
   move();move();move();turnLeft();
   move();move();move();move();turnLeft();
   move();move();move();move();turnLeft();
   move();move();move();move();turnLeft();
   }
   
   for chessboard

   function main(){
   //your code here
   m();
   n();
   m();
   n();
   m();
}
function m(){
putBeeper();
move();move();putBeeper();
move();move();putBeeper();
turnLeft();

}
function n(){
   move();
   turnLeft();
   move();putBeeper(); 
   move();move();putBeeper();
   move();turnLeft();turnLeft();turnLeft();
   move();turnLeft();turnLeft();turnLeft();
   }

   */
```

## 93.Parameters and arguments
```javascript

/*function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

   // var noofbottles=Math.floor(money/1.5);
    console.log("Bought " + Math.floor(money/1.5) + " milk bottle ");

    
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(301)*/

//crlt + R for clearing console
function Lifeinweeks(age){
var x=(365*90)-(age*365)
    var y=(52*90)-(age*52)
    var z=(12*90)-(age*12)
    console.log ("you have " + x +" days, " + y + " weeks, and " + z + " months left.")

}

Lifeinweeks(56);
```

## 99.random number generator
```javascript

/*var n = Math.random()
n = n*6;
n = Math.floor(n) +1;
console.log(n);*/



/*var n=prompt("enter your name");
var m=prompt("another person name");
var r = Math.random()
// r = r*100;
r = Math.floor(r*100)+1;
alert("the bond between " + n + " and " + m + " is " + r + "%")*/

var n=prompt("enter your name");
var m=prompt("another person name");
var r = Math.random()
// r = r*100;
r = Math.floor(r*100)+1;
if (r >= 50){
    alert ("your lv is " +r+ " %, like rome lvs jul")
} else {
    alert ("the bond between " + n + " and " + m + " is " + r + "%")
}
// alert("the bond between " + n + " and " + m + " is " + r + "%")
```