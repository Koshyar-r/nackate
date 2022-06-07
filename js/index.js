const Body = document.querySelector("body")
const NavMenu = Body.querySelector(".menu__content")
const NavOpenBtn = Body.querySelector(".NavOpen")
const NavCloseBtn = NavMenu.querySelector(".NavClose")

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
})

if(NavMenu && NavOpenBtn) {
    NavOpenBtn.addEventListener("click", () => {
        NavMenu.classList.add("open")
        body.style.overflowY = "hidden"
    })
}

if(NavMenu && NavCloseBtn) {
    NavCloseBtn.addEventListener("click", () => {
        NavMenu.classList.remove("open")
        body.style.overflowY = "scroll"
    })
}

const inputs = document.querySelectorAll(".input")

function FocusFunction() {
    let parent = this.parentNode
    parent.classList.add("focus")
}

function BlurFunction() {
    let parent = this.parentNode
    if(this.value == "") {
        parent.classList.remove("focus")
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", FocusFunction)
    input.addEventListener("blur", BlurFunction)
})