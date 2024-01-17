console.log("Wellcome to PJS");
console.log("Hello World");

// DATA TYPES

name = "Mike";      //STRING
num = 50;           //NUMBER
x = undefined;      //UNDEFINED
y = null;           //NULL
boolean = true;     //true , FALSE

console.table(name , num , x , y , boolean);

//we HAVE TOW KINDS OF DATA TYPES

// 1) PRIMITIVE DATA TYPES STRING NUM BOOLEAN INT ETC
// 2) NON PRIMITIVE DATA TYPES ARRAY , OBJECTS , FUNCTIONS ETC

let obj ={
    name : "javi",
    age : 18 ,
    grade : "A",
    phone : 7865478,
    city : "karachi"
}

// FIRST METHOD TO GETTING VALUES OF AN OBJECT

console.log(obj["name"]);
console.log(obj["phone"]);

// SECOND METHOD TO GETTING VALUES OF AN OBJECT

console.log(obj.city);

// FOR IN LOOP

for(let i in obj){
    console.log(i , obj[i])
}