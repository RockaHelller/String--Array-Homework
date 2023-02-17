"use strict"


//#region ClassPractice

//#region ClassTask
// let email1 = "murad@gmail.com"
// let email2 = "musa@gmail.com"
// let email3 = "mahir@gmail.com"

// let allEmail = [email1, email2, email3]

// let name1 = "murad"
// let surname1 = "ceferov"
// let userEmail1 = "murad@gmail.com"
// let password = "QWEEWQW123"

// let name2 = "murad"
// let surname2 = "ceferov"
// let userEmail2 = "musa@gmail.com"
// let password2 = "QWEEWQW123"

// let name3 = "murad"
// let surname3 = "ceferov"
// let userEmail3 = "mahir@gmail.com"
// let password3 = "QWEEWQW123"

// let name4 = "murad"
// let surname4 = "ceferov"
// let userEmail4 = "qweeweqw@gmail.com"
// let password4 = "QWEEWQW123"


// function checkEmail(allEmail, userEmail) {
//     for (const item of allEmail) {
//         if (item == userEmail) {
//             return false;
//         }
//     }
//     return true;
// }
// let res = checkEmail(allEmail, userEmail1) ? "Success" : "Error"


// console.log(res);


// let a = "salam Azerbaycan"


// function changeToUpperCase(a) {
//     console.log(a.substring(0, 1).toUpperCase() + a.substring(1));
// }

// changeToUpperCase(a)
//#endregion

// let date = new Date()

// date.getFullYear()

// console.log(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDay() + 12) + "-" + (date.getHours() + ":" + date.getMinutes));


// function test() {
//     var age = 55;
//     console.log(age);    
// }

// test();'


// console.log(address.length);

// console.log(search(address) ? "Found" : "NotFound");

// function search(address) {
//     for (let i = 0; i < address.length; i++) {
//         if (address[i == "m"]) {
//             return true
//         }
//         return false
//     }
// }

let address = "Ehmedli Baki"
let str2 = "Istanbul"

// console.log(address.includes("m"));
// console.log(address.at(0));
// console.log(address[0]);
// console.log(address.charAt(0));
// console.log(address.charCodeAt(0));
// console.log(address.slice(1,5));
// console.log(address.substring(1,5));
// console.log(address);
// console.log(address.replace("E", "A"));
// console.log(address.replace("Baki", "Ankara"));
// console.log(address.concat(str2));
// console.log(address.startsWith("e".toUpperCase()));
// console.log(address.padEnd(14, "x"));

// let result = address.split("");

// for (const item of result) {
//     console.log(item);
// }

// document.querySelector("button").addEventListener("keydown",function(e){
//     if (e.keyCode == 38) {
//         console.log("yuxari");
//     } else if (e.keyCode == 13){
//         console.log("enter");
//     }
// })


// let user = {
//     name: "Ramil",
//     surname: "Allahverdiyev",
//     email: "ramil99@code.edu.az",
//     password: "Ramil123"
// }

// function register(user) {
//     let emails = "cadiv@gmail.com,resul@gmail.com,ramil99@code.edu.az"
//     let emailsArray = emails.split(",")

//     for (const item of emailsArray) {
//         if (user.email == item) {
//             return "This email already used"
//         }
//     }
//     return "Registered succesfully"
// }

// console.log(register(user));


let nums = [1,5,10,20,44];

console.log(nums.every(m=>m>0));



//#endregion



//#region HomeTask

// function reverseString(str) {
//     let emptyString = ""

//     for (let i = str.length - 1; i >= 0; i--) {
//         emptyString += str[i]
//     }
//     console.log(emptyString);
// }

// reverseString("Cavid")

//#endregion
