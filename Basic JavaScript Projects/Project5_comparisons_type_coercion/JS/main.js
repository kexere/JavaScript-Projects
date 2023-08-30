var x = 2023 //variable with a number data type
document.write(typeof x); //printing data type of variable x
document.write("<br>");

document.write("20" + 23); //expression combining a string and number
document.write("<br>");

document.write(-6E310); //to display negative infinity
document.write("<br>");
document.write(6E310); //to display infinity
document.write("<br>");

document.write(10>6); //utilizing > operator
document.write("<br>");
document.write(6>10); //utilizing > operator

console.log(4+4); //using  console
console.log(4>8); //using console

document.write("<br>");
document.write(4 == 6); //utilizing == operator
document.write("<br>");
document.write(4 == 4); // utizlizing == operator
document.write("<br>");

//utilizing === operator
A = 13;
B = 13;
document.write(A === B);
document.write("<br>");
C = "one";
D = 1;
document.write(C === D);
document.write("<br>");
E = 15;
F = "15";
document.write(E === F);
document.write("<br>");
G = 12;
H = 13;
document.write(G === H);
document.write("<br>");

//utilizing > and && operators
document.write(2>1 && 4>3);
document.write("<br>");
document.write(1>2 && 4>3);
document.write("<br>");

//utilizing > and || operators
document.write(4>3 || 1>2);
document.write("<br>");
document.write(4>5 || 1>2);
document.write("<br>");

//itilizing ! operator
function Not_function() {
    document.getElementById("Not").innerHTML = ! (19 > 20);
}