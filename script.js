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

// function isLeap(year) {

//   if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0){
//     return("Leap year.");
//   } else {
//     return("Not leap year.");
//   }
// }

// console.log(isLeap(1998));

///////////////////////////////////////////////

////////////// GUEST LIST ARRAY //////////////

// var guestList = ["Angela","Jack","Emilio","Beth","James","Lara","Jason"];
// var guest = prompt("What is the name?");

// if (guestList.includes(guest)) {
//   alert("Welcome " + guest);
// } else {
//   alert("Not in the guest list. Maybe next time");
// }

//////////////////////////////////////////////////////////


// var output = [];
// var count = 1;

// function fizzBuzz() {

//   if (count % 3 === 0 && count % 5 === 0) {
//     output.push("FizzBuzz");
//   } else if (count % 3 === 0) {
//     output.push("Fizz");
//   } else if (count % 5 === 0) {
//     output.push("Buzz"); 
//   } else {
//     output.push(count);
//   }

//   count++;

//   console.log(output);

  // if (count % 5 === 0) {
  //   count = ("Buzz");
  // }
  // if (count % 3 === 0 && count % 5 === 0) {
  //   count = ("FizzBuzz");
  // }
  // return;
// }


////////////// WHO IS GOING TO BUY LUNCH?//////////////////////

// function whosPaying(names) {
    
  /******Don't change the code above*******/
      
      //Write your code here.

//   var numberOfPeople = names.length;

//   var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);

//   var randomPerson = names[randomPersonPosition];

//   return randomPerson + " is going to buy the lunch today!";
      
//   /******Don't change the code below*******/    
//   }

// console.log(whosPaying(["Angela","Ben","Jenny","Micael","Chloe"]));


////////////////////// WHILE LOOPS ///////////////////////
// var output = [];
// var count = 1;

// while(count <= 100) {

//   output.push(count);
//   count++
// }
// console.log(count);

//////////// 99 BOTTLES OF BEER CHALLENGE /////////////

// var count = 100;

// function beer() {

//   while (count >= 1) {

//     console.log(`${count} bottles of beer on the wall, ${count} bottles of beer Take one down and pass it around, ${count - 1} bottles of beer on the wall`);

//     count--;
//   }
//   console.log("No more bottles of beer on the wall, no more bottles of beer, Go to the store and buy some more, 99 bottles of beer on the wall");
// }

// beer();

///////////////////// FOR LOOP ////////////////////////

// function beer() {

//   for(count = 100; count > 0; count--) {

//     console.log(`${count} bottles of beer on the wall, ${count} bottles of beer Take one down and pass it around, ${count - 1} bottles of beer on the wall`);

//   }
//   console.log("No more bottles of beer on the wall, no more bottles of beer, Go to the store and buy some more, 99 bottles of beer on the wall");
// }

// beer();


///////////////////// FIBONACCI CHALLENGE ///////////////////////

function fibonacciGenerator (n) {

  var output = [];

  if(n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];

    for (var i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
      
}

  console.log(fibonacciGenerator(10));