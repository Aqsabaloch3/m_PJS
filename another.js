let elem = document.getElementsByClassName('container');
elem[0].innerHTML = "HELLO WORLD";

let newBtn = document.createElement('button');

elem[0].appendChild(newBtn);

newBtn.innerHTML = "Click Here!"
newBtn.className = "btn btn-dark px-5 fw-bold";
newBtn.style.letterSpacing = "10px";

// EVENTS

newBtn.addEventListener('click' , hello);
    function hello(){
        console.log("TOU CLICKED ON ME!");
        newBtn.innerHTML = "WOW!"
    }



let newInp = document.createElement('input');
elem[0].appendChild(newInp);
newInp.className = "form-control mt-5";

newInp.addEventListener('keyup' , one);
    function one(){
        console.log("Apple Apple!");
    }


   