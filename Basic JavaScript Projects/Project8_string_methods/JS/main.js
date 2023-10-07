//utilizing the .concat() method
function concatenate() {
    var part_1 = "It is ";
    var part_2 = "fun ";
    var part_3 = "to make ";
    var part_4 = "full sentence.";
    var full_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("make_sentence").innerHTML = full_sentence;
}

//utilizing the .slice() method
function slice_Method() {
    var Sentence = "Good day to me and good day to you!";
    var Section = Sentence.slice(19,35);
    document.getElementById("Slice").innerHTML = Section.toUpperCase();
}

//utilizing the .search() method
function searchHappy() {
    var text = document.getElementById("locate").innerHTML;
    var index = text.search("happy");
    document.getElementById("searching").innerHTML = index;
}

//utilizing the .toString() method
function string_Method() {
    var d = new Date();
    var year = d.getFullYear();
    document.getElementById("numbers_to_string").innerHTML = year.toString();
}

//utilizing the .toPrecision() method
function precision_Method() {
    var B = 534534.5344635465345;
    document.getElementById("Precision").innerHTML = B.toPrecision(8);
}

//utilizing the toFixed() method
function toFixed_Method() {
    var num = 6.774446;
    var n = num.toFixed();
    document.getElementById("fixed").innerHTML = n;
}

//utilizing valueOf() method
function valueOf_Method() {
    var num = 7;
    var n = num.valueOf();
    document.getElementById("value").innerHTML = n;
}