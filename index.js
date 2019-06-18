// Assign random numbers
var randomNumber1 = randomNum();
var randomNumber2 = randomNum();

// Select specific image using random number
var randomImg1 = "images/dice" + randomNumber1 + ".png";
var randomImg2 = "images/dice" + randomNumber2 + ".png";

// Modify the src attribute of img
document.querySelector(".img1").setAttribute("src", randomImg1);
document.querySelector(".img2").setAttribute("src", randomImg2);

// Show who won by modifying the heading
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Player 1 won!"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 won! 🏆"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}

// Generate random number between 1 and 6
function randomNum() {
    return Math.floor(Math.random() * 6) + 1;
}
