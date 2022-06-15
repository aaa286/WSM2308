//show/hide menu
function toggleMenu(toggleID, navListID) {
    //html -> js
    const toggle = document.getElementById(toggleID);
    const navList = document.getElementById(navListID);
    
    function clickHandler() {
        //console.log('//show/hide menu: .show-menu');
        navList.classList.toggle('show-menu');
    }

    if(toggle&&navList) {
        //toggle click
        toggle.addEventListener('click', clickHandler);
        //show-hide menu: .show-menu
    }
}
toggleMenu("nav-toggle", "nav-list");

// const say = () => console.log("Hello World4");

// const say = () => {
//     console.log("Hello World3");
// }

// const say = function () {
//     console.log("Hello World2");
// }

// function say() {
//     console.log("Hello World");
// }
// say();