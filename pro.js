// setTimeout(function(){
//     console.log("Hello World!")
// }, 4000)

// // setInterval(function(){
// //     document.write("WOW!")
// // },2000)

// // PROMISE

// let promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("THIS IS FIRST PROMISE!")
//     },2000)
// })

// // SECOND
// let promiseTwo = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({name : "Afnan" , password : "123456" })
//     },2000)
// })

// promiseTwo.then(function(user){
//     console.log(user)
// })

// let promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username : "Afnan" , email : "afnan@gmail.com"})
//     },2000)
// })

// promiseThree.then(function(elem){
//     return elem.email;
// }).then(function(userEmail){
//     console.log(userEmail)
// })

// let promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({name : "ABC" , password : "xyz"})
//         }
//         else{
//             reject("ERROR! SOMETHING WENT WRONG HERE!")
//         }
//     },4000)
// })


// promiseFour.then(function(variable){
//     return variable.name;
// })
// .then(function(myName){
//     console.log(myName)
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(function(){
//     console.log("ERROR HAS BEEN RESOLVED OR REJECTED!")
// })


// let promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({party : "ANNUAL DINNER" , email : "annual@gmail.com"})
//         }
//         else{
//             reject("ERROR IN THIS JS FUNCTION.")
//         }
//     },3000)
// })

// async function consumedPromiseFive(){
//     try{
//         let resp = await promiseFive;
//         console.log(resp);
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// consumedPromiseFive()


// // API WITH SYNC


// async function getAllUsers(){
//     try{
//         let response = await fetch('https://jsonplaceholder.typicode.com/users')
//         let data = await response.json();
//         document.write(JSON.stringify(data))
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// getAllUsers()


