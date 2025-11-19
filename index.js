

// var btn = document.querySelector("button")

// var h1 = document.querySelector("h1")

// btn.addEventListener("click",function () {
//     h1.innerHTML = "changing user"

//     setTimeout(() => {
//         h1.innerHTML = "arman khan"
        
//     }, 2000);
    
// })

// setTimeout(() => {
//        console.log("hey");
       
        
//     }, 2000);


// setInterval(() => {
//     console.log("hey");
    
// }, 5000);

// var a  = 1

// var int  = setInterval(() => {
//     a++
//     console.log(a);
    
// }, 1000);

// clearInterval(int)


btn  = document.querySelector("button");
var h2  = document.querySelector("h2")
var grow  = 0;
var inner  = document.querySelector(".inner")


btn.addEventListener("click", function() {
     btn.style.pointerEvents = "none"
   let int  =  setInterval(() => {
       grow++
        console.log(grow);
        h2.innerHTML = grow + '%'
        inner.style.width = grow  + "%"
    }, 50);

    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = "Dowloaded"
        btn.style.opacity = 0.5
       
    }, 5000);
    
})





