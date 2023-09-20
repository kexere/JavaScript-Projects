var A = 2000 //global variable

function count() {
    var B = 3; //local variable
    document.write(A + 20 + B + "<br>"); //using local and global variable
}

function multiply() {
    console.log(A*20*B); //using console to debug
}

count();
multiply();

// if statement function
function get_Month() {
    if (new Date().getMonth() < 11) {
        document.getElementById("Christmas").innerHTML = "It's not even close to Christmas yet!";
    }
    if (new Date().getMonth() === 10) {
        document.getElementById("Christmas").innerHTML = "It's close to Christmas! Just a little bit more to wait!";
    }
    if (new Date().getMonth() === 11 && new Date().getDate() < 24) {
        document.getElementById("Christmas").innerHTML = "It is December already! Christmas is very close";
    }
    if (new Date().getMonth() === 11 && new Date().getDate() === 24) {
        document.getElementById("Christmas").innerHTML = "It's Christmas Eve!";
    }
    if (new Date().getMonth() === 11 && new Date().getDate() === 25) {
        document.getElementById("Christmas").innerHTML = "Merry Christmas!";
    }

}

// if, else if and else function
function Goodness_Function() {
    var good_nogood = document.getElementById("good_nogood").value;
    var presents;
    if (good_nogood === "yes" || good_nogood === "Yes") {
        presents = "Good job! You deserve some nice presents this year!";
    }
    else if (good_nogood === "no" || good_nogood === "No") {
        presents = "Naughty! Coal for you this year!";
    }
    else {
        presents = "Cheeky! It is 'yes' or 'no' answers only!";
    }
    document.getElementById("Are_you_good?").innerHTML = presents;
}