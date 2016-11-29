console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king"
if (cardOne===cardTwo) {alert("You found a match!");}
else if (cardThree===cardFour) {window.alert("You found a match!");}
else if (cardTwo===cardFour){window.alert("sorry, try again");}
else if (cardOne===cardThree){window.alert("sorry, try again");}
else if (cardTwo===cardThree){window.alert("sorry, try again");}
else (cardOne===cardFour){window.alert("sorry, try again")}