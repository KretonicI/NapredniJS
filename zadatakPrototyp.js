//constructor Osoba
function Osoba(){
    this.ime= "Ana",
    this.godine = "25";

}
var osoba1 = new Osoba();
console.log("Osoba1 => ime: " + osoba1.ime + "; ima godina: " + osoba1.godine);

Osoba.prototype.spol = "Žensko"; 
console.log("Osoba1 => ime: " + osoba1.ime + "; ima godina: " + osoba1.godine + "; Spol: " + osoba1.spol);