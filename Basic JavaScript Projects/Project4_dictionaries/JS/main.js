function my_Dictionary() {
    var TV_Show = {
        Title:"Game of Thrones",
        Genre:"Fantasy, Serial drama, Tragedy",
        Seasons:8,
        Episodes:73,
        Rating:9.2
    };
    delete TV_Show.Rating; //this removes the Rating KVP from the Dictionary before it is displayded
    document.getElementById("Dictionary").innerHTML = TV_Show.Rating;
}