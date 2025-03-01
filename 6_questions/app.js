//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {

    // check the content of forEach loop
    // console.log(question);

    const btn = question.querySelector(".question-btn")
    //display the buttons (up and down)
    // console.log(btn);

    btn.addEventListener("click", function () {
        questions.forEach(function (item) {
            // display the each question in the loop
            // console.log(item);
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");

    });
});