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