var x = "John Doe";
function vratiNesto(name) {
    var x =name;
    function f (){
        return x;
    }
    return f;
}
var y = vratiNesto("John Doe");
console.log(y); // y je postao funkcija

var z = vratiNesto ()(); // --z=undefind
console.log(z);
z= vratiNesto ("test")();
console.log(z);

var name1="Moje ime";

(function vratiNesto2(name1){
    console.log("invoked vratiNesto2(" + name1 + ")");
    var x =name1;
    function f (){
        console.log("invoked f()");
        return x;
    }
    return f;
})(name1);