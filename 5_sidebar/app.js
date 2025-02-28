const sidebarTogglebtn = document.querySelector(".sidebar-toggle-btn");
const closeBtn = document.querySelector(".close-btn")
const sidebar = document.querySelector(".sidebar")

sidebarTogglebtn.addEventListener("click", function(){
    console.log(sidebar.classList);
    sidebar.classList.toggle("show-sidebar");
    
});

closeBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar")
});