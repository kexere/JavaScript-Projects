function NaN_function() {
    document.getElementById("NaN").innerHTML = 0/0;
}

function True_function() {
    document.getElementById("true").innerHTML = isNaN('This is a not a number');
}

function False_function() {
    document.getElementById("false").innerHTML = isNaN('2023')
}