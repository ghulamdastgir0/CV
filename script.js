function toggleTheme(){
    document.body.classList.toggle("dark-body");
    document.querySelector("header").classList.toggle("dark-header");
    document.querySelector("footer").classList.toggle("dark-footer");
    const listItems = document.querySelectorAll(".list-items");
    listItems.forEach(item => {
        item.classList.toggle("dark-list-items");
    });
    document.querySelector(".container").classList.toggle("dark-container");
    const bar = document.querySelectorAll(".bar");
    bar.forEach(item =>{
        item.classList.toggle("dark-bar");
    });
    const buttons = document.querySelectorAll("button");
    buttons.forEach(item =>{
        item.classList.toggle("dark-button");
    });
    const themeBtn = document.getElementById("theme-btn");

    if (document.body.classList.contains("dark-body")) {
        themeBtn.innerText = "Light Mode";
    } else {
        themeBtn.innerText = "Dark Mode";
    }
}
