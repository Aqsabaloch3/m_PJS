// ARRAY

let fruits = ["apple" , "banana" , "manogo" , "orange" ,"pine apple"]
console.log(fruits);
console.log(fruits.length);

// METHODS OF AN ARRAY
// PUSH LAST INDEX ME ADD KARTA HAI
console.log(fruits.push("banana"));
console.log(fruits);
// POP LAST INDEX KO REMOVE KARTA HAI
console.log(fruits.pop());
console.log(fruits);
// SHIFT FIRST INDEX KA ELEMENT KO REMOVE KARTA HAI
console.log(fruits.shift());
console.log(fruits);
// UNSHIFT FIRST INDEX ME ELEMENT KO ADD KARTA HAI
console.log(fruits.unshift("kiwi"));
console.log(fruits);

// ['kiwi' , 'mango' , 'orange' , 'pine apple']

// SLICE EK PARTICULAR PORTION APKO LAA KA DETA HAI FIRST VALUE TARGET INDEX LIKE SECOND JAHAN TK ELEMENT CHAY (1,5)
// SECOND VALUE ME APNE JO LAST VALUE DI HAI TO WO US SE EK PEHLE WALE TK APKO ELEMENT LAA K DETA HAI
// AGAR 5 DYA HAI SECOND INDEX ME TO WO APKO 4 TK KI VALUES LAA K DEGAA!
console.log(fruits.slice(1,4));






