count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(button){

    button.addEventListener("click", function(e){
        currbtn = e.currentTarget.classList;

        if(currbtn.contains("decrease")){
            count--;
        }else if(currbtn.contains("increase")){
            count++;
        }else{
            count = 0;
        }

        if(count > 0){
            value.style.color = "green";
        }else if (count < 0){
            value.style.color = "red";
        }else{
            value.style.color = "hsl(209, 61%, 16%)";
        }
        value.textContent = count;


    });

});