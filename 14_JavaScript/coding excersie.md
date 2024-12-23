# Coding excersie

## 1 Javascript Variables Exercise

```javascript
function test() {
  var a = "3";
  var b = "8";

  /***********Do not change the code above 👆*******/
  //Write your code on lines 7 - 9:
  var x = b;
  b = a;
  a = x;

  /***********Do not change the code below 👇*******/

  console.log("a is " + a);
  console.log("b is " + b);
}
```

## 2 Life in Weeks Coding Exercise

```javascript
function lifeInWeeks(age) {
  /************Don't change the code above************/

  //Write your code here.
  var x = 365 * 90 - age * 365;
  var y = 52 * 90 - age * 52;
  var z = 12 * 90 - age * 12;
  console.log(
    "You have " + x + " days, " + y + " weeks, and " + z + " months left.'."
  );

  /*************Don't change the code below**********/
}
```

## 3 BMI Calculator Challenge

```javascript
//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / (height * height));
  return bmi;
}
var bmi = bmiCalculator(65, 1.8);

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
```

## 4 BMI Calculator Advanced (IF/ELSE)
```javascript
function bmiCalculator(weight, height) {
    const bmi = Math.floor(weight / (height * height));

    let interpretation;

    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }

    return interpretation;
}
```

## 5 
![alt text](<Screenshot (98).png>)
```javascript
function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    // Write your code here.
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year.";
            } else {
                return "Not leap year.";
            }
        } else {
            return "Leap year.";
        }
    } else {
        return "Not leap year.";
    }
    
/**************Don't change the code below****************/    

}

```
