function getReceipt() {
    // This initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h2>You Ordered:</h2>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var selectedSize = ""; //declare outside of the loop
    var selectedCrust = "";
    var selectedCheese = "";
    var selectedSauce = "";
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === ""){
        alert("Please select a pizza size.");
        return;
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;

    console.log(selectedSize+" = £"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: £"+runningTotal+".00");

    // Get selected crust
    var crustArray = document.getElementsByClassName("crust");
    for (var i = 0; i < crustArray.length; i++) {
        if (crustArray[i].checked) {
            selectedCrust = crustArray[i].value;
            text1 = text1 + selectedCrust + "<br>";
        }
    }

    // Get selected cheese
    var cheeseArray = document.getElementsByClassName("cheese");
    for (var i = 0; i < cheeseArray.length; i++) {
        if (cheeseArray[i].checked) {
            selectedCheese = cheeseArray[i].value;
            text1 = text1 + selectedCheese + "<br>";
        }
    }

    // Get selected sauce
    var sauceArray = document.getElementsByClassName("sauce");
    for (var i = 0; i < sauceArray.length; i++) {
        if (sauceArray[i].checked) {
            selectedSauce = sauceArray[i].value;
            text1 = text1 + selectedSauce + "<br>";
        }
    }

    //These variables will get passed on to each function
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1) {
    toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"£"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"£"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h2>Total: <strong>£" +
        runningTotal+".00"+"</strong></h2>";
};