//toggle style switcher
/*const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
//hide style switcher on scroll
window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})
//theme color
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyle.forEach((style)=>{
        if(color===style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled", "true");
        }
    
    })
}
*/
//light and dark mode
//localStorage.setItem("color", color);
/*changeColor();
function changeColor(){
    alternateStyle.forEach((style)=>{
        if(localStorage.getItem("color")===style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
    })
}*/
/*const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", ()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})*/

let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#mydark");
const enabledDarkMode = () => {
    /*darkMode.querySelector("i").classList.toggle("fa-sun");
    darkMode.querySelector("i").classList.toggle("fa-moon");*/
    document.body.classList.add("dark");
    localStorage.setItem("darkMode", "enabled");
    darkModeToggle.querySelector("i").classList.remove("fa-moon");
    darkModeToggle.querySelector("i").classList.add("fa-sun");
    
};

const disableDarkMode = () => {
    /*darkMode.querySelector("i").classList.toggle("fa-sun");
    darkMode.querySelector("i").classList.toggle("fa-moon");*/
    document.body.classList.remove("dark");
    localStorage.setItem("darkMode", null);
    darkModeToggle.querySelector("i").classList.remove("fa-sun");
    darkModeToggle.querySelector("i").classList.add("fa-moon");
};

if(darkMode === "enabled"){
    enabledDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if(darkMode !== "enabled"){
        enabledDarkMode();
        console.log(darkMode);
    }else{
        disableDarkMode();
        console.log(darkMode);
    }
});


