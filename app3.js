// FOR LOOP

for(let i=0; i<10; i++){
    console.log("THIS IS FOR LOOP!" , i++)
}

// WHILE LOOP

let num = 15;

while(num<=20){
    console.log("THIS IS WHILE LOOP!" , num);
    num++;
}

// DO WHILE LOOP

let a = 50;

do {
    console.log("THIS IS DO WHILE LOOP!" , a)
    a++;
} while (a<49);

// FOR IN LOOP

let obj = {
    nume : "MIKE",
    age : 20,
    grade : "A"
}

for(let z in obj){
    console.log(z , obj[z])
}