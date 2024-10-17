const header = document.querySelector("header");

window.onscroll = () => {
    header.classList.toggle('no-background', window.scrollY < 100);
}

header.classList.toggle('no-background')