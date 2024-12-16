const body =  document.querySelector("body");
const header = document.querySelector("header");
const menuButton = document.getElementById("burgerButton");
const sidebar = document.querySelector(".sidebar");
const mobileNavItems = document.querySelectorAll('.mobile-btn');

let sidebarState = false;

mobileToggle = () => {
    if (!sidebarState) {
        menuButton.textContent = "×";
        sidebar.classList.toggle('active');
        sidebar.classList.toggle('no-scroll');
        sidebarState = !sidebarState;
    } else {
        menuButton.textContent = "≡";
        sidebar.classList.toggle('active');
        sidebar.classList.toggle('no-scroll');
        sidebarState = !sidebarState;
    };
}

window.onscroll = () => {
    header.classList.toggle('no-background', window.scrollY < 200);
}

menuButton.addEventListener('click', mobileToggle);
mobileNavItems.addEventListener('click', mobileToggle);

preventDefault = (e) => {
    e.preventDefault();
}

