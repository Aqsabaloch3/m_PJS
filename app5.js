let heroes = ["SUPER MAN" , "BAT MAN" , "SPIDER MAN" , "HULK" , "IRON MAN" , "FALCON"];
console.log(heroes);

// ARRAY ARE MUTABLE

heroes[5] = "AQUA MAN";
console.log(heroes);

//SPLICE
console.log(heroes.splice(2,2,"WHY MAN" , "ACHA MAN"));
console.log(heroes);

let bbq = ["TIKKA" , "SEEKH KABAB" , "MALAI KABAB" , "CHAPLI KABAB" , "CHARGHA"];
let seafood = ["FISH" , "PRAWNS" , "LOBSTER"];
let sweetdish = ["CUSTUARD" , "JELLY" , "ICE CREAM" , "GULAB JAMUN"];

let menu = bbq.concat(seafood , sweetdish);
console.log(menu);