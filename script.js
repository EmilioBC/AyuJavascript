// var post = prompt("Compose your message of upto 140 characters.");
// var postSlice = post.slice(0,140);
// var postCount = postSlice.length;
// var remaining = 140 - postSlice.length;
// alert(postSlice + " \nYou have written " + postCount + " characters and you have " + remaining + " left");

// var name = prompt("What is your name?");
// name = name.toLowerCase();
// var nameSlice = name.slice(0,1);
// var firstUpper = nameSlice.toUpperCase();
// var restLower = name.slice(1,name.length);
// alert("Hello " + firstUpper + restLower);

// Dog Age
// var dogAge = prompt("How old is the dog?");
// var humanAge = (dogAge - 2) * 4 + 21;
// alert("You dog is " + dogAge + " years old and it is " + humanAge + " years old in humans age." );


// function getMilk(money) {   
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("Your money is $" + money + ". You can buy " + Math.floor(money / 1.5) + " bottles of milk");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
// } 

// getMilk(10);

////////////////////// LIFE CALCULATOR /////////////////
// function lifeInWeeks(age) {

//   var yearsRemaining = 90 - age;
//   var lifeDays = yearsRemaining * 365;
//   var lifeWeeks = yearsRemaining * 52;
//   var lifeMonths = yearsRemaining *12;

//   console.log("You have " + lifeDays  + " days, " + lifeWeeks + " weeks, and " + lifeMonths + " months left.")
// }

// lifeInWeeks(28);
///////////////////////////////////////////////////////


///////////////// UPDATED GET MILK ////////////////////////
// function getMilk(money, costPerBottle) {   
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");

//   console.log("Buy " + calcBottles(money, costPerBottle) + " bottles of milk");

//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");

//   return calcChange(money, costPerBottle);
 
// } 

// function calcBottles(startingMoney, costPerBottle) {
//   var numberOfBottles =  Math.floor(startingMoney / costPerBottle);
//   return numberOfBottles;
// }

// function calcChange(startingAmount, costPerBottle) {
//   var change = startingAmount % costPerBottle;
//   return change;
// }

// getMilk(6, 1.5);

// console.log("Here are your " + getMilk(5, 1.5) + " of milk. You have " + calcChange + " of change.");


// function getMilk(money) {   
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");

//   var numBottles = Math.floor(money / 1.5);

//   console.log("Buy " + numBottles + " of milk");

//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");

//   return money % 1.5;
 
// } 
// getMilk(10);




// function getMilk(money, costPerBottle) {   
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");

//   console.log("Your money is $" + money + ". You can buy " + calcBottles(money, costPerBottle) + " bottles of milk. You have a change of " + calcChange(money,costPerBottle) + "$.");

//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");

//   return calcChange(money, costPerBottle);
// } 

// function calcBottles(startingMoney, costPerBottle) {
//   var bottles = Math.floor(startingMoney / costPerBottle);
//   return bottles;
// }

// function calcChange(startingAmount, costPerBottle) {
//   var change = startingAmount % costPerBottle;
//   return change;
// }


// console.log ("Here are your " + getMilk(10, 1.5) + " milk and a change of " + calcChange(10, 1.5));


////////////// BMI CALCULATOR ///////////////////////////

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

// function bmiCalculator(weight, height) {
//   var calcBMI = Math.floor(weight / (height * height));
//   return calcBMI;
// }

// var bmi = bmiCalculator(65, 1.8);
// console.log("Your BMI is: " + bmi);

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/

/////////// LOVE CALCULATOR ////////////////////////

//   var yourName = prompt("What is your Name? ");
//   var crushName = prompt("What is your crush Name? ");

//   var loveScore = Math.random();
//   loveScore = Math.floor(loveScore * 100) + 1;
  
// alert("You are " + loveScore + "% compatible");


////////// BMI CALCULATOR /////////////////

////////////// BMI CALCULATOR ///////////////////////////

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

// function bmiCalculator(weight, height) {
//    var bmi = Math.floor(weight / (height * height));
//    var interpretation; 

//     if (bmi < 18.5) {
//       interpretation = ("Your BMI is " + bmi + ", so you are underweight."  );
//     } 
//     if (bmi >= 18.5 && bmi <= 24.9) {
//       interpretation = ("Your BMI is " + bmi + ", so you have a normal weight.");
//     }
//     if (bmi > 24.9) {
//       interpretation = ("Your BMI is " + bmi + ", so you are overweight.");
//     }
//     return interpretation;
// }

//  alert(bmiCalculator(60, 2));


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
*/
// var bmi = bmiCalculator(65, 1.8); 

function isLeap(year) {

  if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0){
    return("Leap year.");
  } else {
    return("Not leap year.");
  }
}

console.log(isLeap(1998));