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