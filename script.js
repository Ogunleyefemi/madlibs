let holiday = prompt("a date for holiday");
let noun = prompt("put any noun");
let place = prompt("a name of place");
let person = prompt("name of person");
let adjective = prompt("put an adjective");

function madlibs(){

    let story = " i can't believe it's already " + holiday + " i can't wait to put on my " + noun + " and visit every " + place + " in my area " + " This year, i'm going to dressup as a " + person + " with " + adjective ;
    return story ;
}
alert(madlibs());