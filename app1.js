// ARITHMETIC OPERATORS

let  a = 24;

let b = 40;

console.log("The sum of a + b is :" , a+b);
console.log("The sub of a - b is :" , a-b);
console.log("The mul of a * b is :" , a*b);
console.log("The div of a / b is :" , a/b);
console.log("The modulus of a % b is :" , a%b);

let z = 50;

//POST INCREMENT
console.log(z++);       // z = z + 1 +> 51
console.log(z);         // 51
console.log(++z);       // z = z + 1 => 51 +1 => 52

z +=20 ;                // 72
console.log(z);         //51

//LOGICAL OPERATORS 
console.log(true || true);          // TRUE
console.log(false || true);         // TRUE
console.log(true || false);         // TRUE
console.log(false || false);        // FALSE

console.log("AND CASE")

console.log(true && true);          // TRUE
console.log(false && true);         // FALSE
console.log(true  && false);        // FALSE
console.log(!false && !false);      // FALSE


// > GREATER THAN
// < LESS THAN
// == EQUAL
// === EQUAL WITH TYPE CHECK