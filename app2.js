let  age  = 21;

if(age>=20){
    console.log("YOU CAN CAST YOUR VOTE");
}
if(age<=20){
    console.log("YOU CAN NOT CAST YOUR VOTE");
}

if(age>=20){
    console.log("YOU CAN CAST YOUR VOTE");
}
else{
    console.log("YOU CAN NOT CAST YOUR VOTE");
}

let userName = prompt("Enter your name");
console.log(userName);

let mode = prompt(`Enter your mode 
1) DARK
2) LIGHT`);
let color ;

if (mode === "DARK"){
    color = "BLACK";
}

if (mode === "LIGHT"){
    color = "white";
}

console.log(color);