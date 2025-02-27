const colors = ["white", "red", "pink", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn")
const color = document.querySelector(".color");

btn.addEventListener("click", function(){

    const rndmNumber = getRandomNumber();
    console.log(rndmNumber);


    document.body.style.backgroundColor = colors[rndmNumber];
    color.textContent = colors[rndmNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}