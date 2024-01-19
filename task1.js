let userName = prompt("Enter your name");
console.log(userName);

let MATHS = parseInt(prompt("enter your MATHS number"));
let ENG = parseInt(prompt("enter your ENG number")); 
let ISL = parseInt(prompt("enter your ISL number")); 
let URDU= parseInt(prompt("enter your URDU number")); 
let PST = parseInt(prompt("enter your PST number")); 

let obtainedMarks = MATHS + ENG + ISL + URDU + PST;

// PER FORMULA
let per = obtainedMarks/500*100;
console.log(per);

if(per >=90 && per <=100){
    console.log("YOUR GRADE IS A+1")
}else if(per >=80 && per <=90){
    console.log("YOUR GRADE IS A+")
}else if(per >=70 && per <=80){
    console.log("YOUR GRADE IS A")
}else if(per >=60 && per <=70){
    console.log("YOUR GRADE IS B")
}else if(per >=50 && per <=40){
    console.log("YOUR GRADE IS C")
}else if(per >=33 && per <=40){
    console.log("YOUR GRADE IS D")
}else{
    console.log("FAILED");
}









