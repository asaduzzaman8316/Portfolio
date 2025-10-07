let sideBar = document.querySelector("#sideBar");
let topBtn = document.querySelector("#topBtn");

topBtn.addEventListener(("click"),() =>{
    sideBar.classList.toggle("hidden");
})