// function number(n){
//  return n;
// }

// let number = (top, bottom) => top + 10 + bottom;

// new practice start

// let javascript = {
//     name : "javaScript",
//     libraries : [
//         "React", "Vue", "Angular", "jQuery"
//     ],
//     printLibraries : function () {
//         this.libraries.forEach( (a) => {
//            return console.log(`${this.name} loves ${a}`)})
//     }
// }

// javascript.printLibraries();

// new practice start 

const searchInput = document.querySelector(".search");
const display = document.querySelector(".result");
const thanks = document.querySelector(".thanks");

// function show(){
//     display.innerHTML = this.value;
//     setTimeout( () => thanks.innerHTML = `You have typed: ${this.value}`, 1000);

// }
// searchInput.addEventListener("keyup", show)

// 2nd way 

// function show(){
//     display.innerHTML = this.value;
//     let self = this;
//     setTimeout( function() { 
//         thanks.innerHTML = `You have typed: ${self.value}`;
//     },1000);

// }
// searchInput.addEventListener("keyup", show)

// 3rd way

const show = function(){
    display.innerHTML = this.value;

    setTimeout( () =>
        thanks.innerHTML = `You have Typed: ${this.value}`, 1000)
};

searchInput.addEventListener("keyup", show);



