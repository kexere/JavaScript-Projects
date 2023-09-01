//a function with HTML and JS using a ternary operation with input from the browser
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to":"You can";
    document.getElementById("Vote").innerHTML = Can_vote + " vote!";
}

//a constructor function utilizing "new" and "this" keywords
function Movie(Title, Genre, Year, Rating) {
    this.Movie_Title = Title;
    this.Movie_Genre = Genre;
    this.Movie_Year = Year;
    this.Movie_Rating = Rating;
}
var Anna = new Movie("The Gentlemen", "Action, Comedy, Crime", 2019, 7.8);
var George = new Movie("Transformers: Rise of the Beasts", "Action, Adventure, Sci-Fi", 2023, 6.1);
var Lisa = new Movie("Ready Player One", "Action, Adevnture, Sci-Fi", 2018, 7.4);

//a function to display the results of the constructor in the HTML element
function myFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Lisa's favorite movie is " + Lisa.Movie_Title + " which was released on " + Lisa.Movie_Year +
    " and have a rating of " + Lisa.Movie_Rating + "  and is in following genres: " + Lisa.Movie_Genre;
}

//a nested function
function NestFunction() {
    var start_string = "Hello!";

    function add(str) {
        start_string = start_string + " " + str;
    }
    add("Have a nice day!");
    document.getElementById("Nested_Function").innerHTML = start_string;
}