// DOM ----> DOCUMENT OBJECT MODEL
//ID NAME
let elem = document.getElementById('second')
// console.log(elem);
// elem.innerHTML = "AN APPLE A DAY!";
elem.textContent = "AN APPLE A DAY!";
elem.style.backgroundColor = "yellow";
elem.style.textAlign = "center";
elem.style.padding = "20px";
elem.classList.add('tow');
elem.classList.add('three');
elem.id = "hello";
elem.classList.remove('two');

let myDiv = document.getElementsByClassName('container');
myDiv[0].innerHTML = "BATCH CODE";
myDiv[0].style.backgroundColor = "purple";
myDiv[0].style.textAlign = "center";
myDiv[0].style.fontSize = "40px";
myDiv[0].style.color = "white";
myDiv[0].classList.add("world");
myDiv[0].id = "pencil";

let newElem = document.createElement('p');
newElem.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit delectus, modi aspernatur alias nesciunt perferendis nam? Vero commodi fuga, voluptate ut ea facilis voluptatibus";
myDiv[0].appendChild(newElem);

let pencil = document.createElement('img');
newElem.appendChild(pencil);

pencil.src = "dom.1.png";


// TAG NAME

let newTag = document.getElementsByClassName('p');
newTag[1].innerHTML = "HELLO";


