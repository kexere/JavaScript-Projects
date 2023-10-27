//function using while loop
function Call_Loop() {
    var digit = "";
    var B = 1;
    while (B <= 20) {
            digit += "<br>" + B;
            B++
        } 
        B = 20;
        while (B > 0) {
            digit += "<br>" + B;
            B--;
        }
    document.getElementById("Loop").innerHTML = digit;
}

let text = "";
let lenght = text.length;
document.getElementById("length").innerHTML = length;

//function using a for loop
var Numbers = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourtheen", "Fiftheen", "Sixteen", "Seventeen", "Eighteen", "Ninetheen", "Twenty"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Numbers.length; Y++) {
    Content += Numbers[Y] + "<br>";
    }
    document.getElementById("List_of_Numbers").innerHTML = Content;
}

//function with an array
function array_Function() {
    var year = [];
    year[0] = "2020";
    year[1] = "2021";
    year[2] = "2022";
    year[3] = "2023";
    year[4] = "2024";
    document.getElementById("Array").innerHTML = "This page was made in " +
        year[3] + ".";
}

//Constant assignment
function constant_function() {
    const car = {petrol:"diesel", brand:"BMW", model:"M5", color:"black"};
    car.color = "red";
    car.price = "£111,425";
    document.getElementById("Constant").innerHTML = "My favorite car is " + 
        car.brand + " " + car.model + ", preferably in color " + car.color + ". It's price starts from " + car.price + "."; 
}

//Let keyword assignment
function let_function() {
var A = 10;
{
    let A = 20;
document.getElementById("let").innerHTML = A;
}
}

//return statement
function returnFunction() {
    var Name = document.getElementById("yourName").value;
    return "Hello " + Name + "!";
}

function displayGreeting() {
    var GreetingMessage = returnFunction();
    document.getElementById("greeting").innerHTML = GreetingMessage;
}

//creating an object with the let keyword
let movie = {
    title: "Strays",
    year: 2023,
    genre: ["adventure", "comedy"],
    rating: 6.3,
    stars: ["Will Ferrell", "Jamie Foxx", "Isla Fisher"],
    description: function() {
        return "Step into the world of  '" + this.title + "', a captivating " + this.genre.join(" and ") 
        + " film. Released in the year " + this.year + ", it has garnered a IMDb rating of " + this.rating 
        + ". With a star-studded cast featuring " + this.stars.join(", ") 
        + ", this movie promises an unforgettable cinematic experience.";
    }
};
document.getElementById("Movie_object").innerHTML = movie.description();

//break statement
let text2 = "";
for (let i = 0; i < 10; i++) {
    if (i === 5) { break; }
    text2 += i + "<br>";
}

document.getElementById("break").innerHTML = text2;

//continue statement
let text3 = "";
for (let i = 0; i < 10; i++) {
    if (i === 5) { continue; }
    text3 += i + "<br>";
}
document.getElementById("continue").innerHTML = text3;