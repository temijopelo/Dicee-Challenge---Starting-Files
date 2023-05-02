var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var imageSource1 = "dice" + randomNumber1 + ".png";

var randomImgSource1 =  "images/" + imageSource1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSource1);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var imageSource2 = "dice" + randomNumber2 + ".png";

var randomImgSource2 =  "images/" + imageSource2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImgSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS!"
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS!"
}else {
    document.querySelector("h1").innerHTML = "DRAW!"
}