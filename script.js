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


function lifeInWeeks(age) {

  var oldAge = 90;
  var lifeDays = (oldAge - age)* 365;
  var lifeWeeks = (oldAge - age)* 52;
  var lifeMonths = (oldAge - age)*12;

  console.log("You have " + lifeDays  + " days, " + lifeWeeks + " weeks, and " + lifeMonths + " months left.")
}

lifeInWeeks(28);
