const navbar_close_btn = document.querySelector(".nav-close-btn")
const collapeNavbarContainer = document.querySelector(".collape-navbar-container")
const menuLogo = document.querySelector(".menu-logo")
const emptyBox = document.querySelector("#empty-box")


navbar_close_btn.addEventListener("click", () => {
    collapeNavbarContainer.classList.add("hide-nav")
    collapeNavbarContainer.classList.remove("display-nav")
    emptyBox.classList.remove("overlay-container")
    emptyBox.classList.add("white-container")
})

menuLogo.addEventListener("click", () => {
    collapeNavbarContainer.classList.remove("hide-nav")
    collapeNavbarContainer.classList.add("display-nav")
    emptyBox.classList.add("overlay-container")
})