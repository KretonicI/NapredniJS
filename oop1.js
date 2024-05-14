var charachter = {
    name: "Eleven",
    show: "Stranger Things",
    portrayedBy: "Millie Bobby Brown",

};

const quotes= [
    "I' m going to my friend. i'm going home.",
    "Pure fuel! PURE FUEL! WOO!",
    "See? Zoomer.",
    "Bitchin.",
];

var proto1 = Object.getPrototypeOf(charachter);
console.log(proto1);
var proto2 = Object.getPrototypeOf(proto1);
console.log(proto2);

proto1.dodaj = function (){
    return quotes[Math.floor(Math.random() * quotes.length)];

};
console.log(proto1.dodaj());