function Addition() {  //defining and naming addition function
    var firstnumber = parseFloat(document.getElementById("first").value); //convert string to number
    var secondnumber = parseFloat(document.getElementById("second").value); //convert string to number
    var result = firstnumber + secondnumber;
    document.getElementById("Math").innerHTML = " = " + result; //print result in HTML
}

function Substraction() { //defining and naming substraction function
    var firstnumber2 = parseFloat(document.getElementById("first2").value); //convert string to number
    var secondnumber2 = parseFloat(document.getElementById("second2").value); //convert string to number
    var result2 = firstnumber2 - secondnumber2;
    document.getElementById("Math2").innerHTML = " = " + result2; //print result in HTML
}

function Multiplication() { //defining and naming multiplication function
    var firstnumber3 = parseFloat(document.getElementById("first3").value); //convert string to number
    var secondnumber3 = parseFloat(document.getElementById("second3").value); //convert string to number
    var result3 = firstnumber3 * secondnumber3;
    document.getElementById("Math3").innerHTML = " = " + result3; //print result in HTML

}

function Division() { //defining and naming division function
    var firstnumber4 = parseFloat(document.getElementById("first4").value); //convert string to number
    var secondnumber4 = parseFloat(document.getElementById("second4").value); //convert string to number
    var result4 = firstnumber4 / secondnumber4;
    document.getElementById("Math4").innerHTML = " = " + result4; //print result in HTML
}

function Multiple() { //defining and naming mutiple operator function
    var firstnumber5 = parseFloat(document.getElementById("first5").value); //convert string to number
    var secondnumber5 = parseFloat(document.getElementById("second5").value); //convert string to number
    var thirdnumber = parseFloat(document.getElementById("third").value); //convert string to number
    var fourthnumber = parseFloat(document.getElementById("fourth").value); //convert string to number
    var fifthnumber = parseFloat(document.getElementById("fifth").value); //convert string to number
    var result5 = (firstnumber5 + secondnumber5) * thirdnumber / fourthnumber - fifthnumber;
    document.getElementById("Math5").innerHTML = " = " + result5; //print result in HTML
}

function Modulus() { //defining and naming the modulus operator function
    var firstnumber6 = parseFloat(document.getElementById("first6").value); //convert string to number
    var secondnumber6 = parseFloat(document.getElementById("second6").value); //convert string to number
    var result6 = firstnumber6 % secondnumber6;
    document.getElementById("Math6").innerHTML = " Remainder is " + result6; //print result in HTML
}

function Negation_Operator() { //defining and naming negation operator function
    var firstnumber7 = parseFloat(document.getElementById("first7").value); //convert string to number
    document.getElementById("Math7").innerHTML = " Negation of provided number is " + -firstnumber7; //print result in HTML
}

function increment() { //defining and naming the increment function
    var incrementnumber = parseFloat(document.getElementById("first8").value); //convert string to number
    incrementnumber++; //add one to the value
    document.getElementById("Math8").innerHTML = " Your new incresed number is " + incrementnumber; //print result in HTML
}

function decrement() { //defining and naming decrement function
    var decrementnumber = parseFloat(document.getElementById("first9").value); //convert string to number
    decrementnumber--; //subtract one from value
    document.getElementById("Math9").innerHTML = " Your new decreased number is " + decrementnumber; //print result in HTML
}

window.alert("Just some random number " + Math.random() * 100); //defining and naming the random function

function math_round() { //defining and naming math object to round numbers
    var firstnumber10 = parseFloat(document.getElementById("first10").value); //convert string to number
    document.getElementById("Math10").innerHTML = " Provided number rounded to its nearest integer is " + Math.round(firstnumber10); //print result in HTML
}