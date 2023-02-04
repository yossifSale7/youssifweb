let loading = document.querySelector(".overlay")

let loadContent = document.querySelector(".loading div h1")

let loadingContent = document.querySelector(".loading")

let header = document.querySelector(".head")

let swipeButton = document.querySelector(".swipe-button")

let sectionScroll = document.querySelector(".my-work .container div:first-of-type")

let text = document.querySelector(".personal-information .information h1")

let text2 = document.querySelector(".personal-information .information p")

let myImg = document.querySelector(".personal-images img:first-of-type")

let headPhone = document.querySelector(".personal-images img:nth-of-type(2)")

let laptop = document.querySelector(".personal-images img:nth-of-type(3)")

document.addEventListener('DOMContentLoaded', function() {  
    setTimeout (() => {
        loading.style.opacity = '0'
        loading.style.visibility = 'hidden'
        var typed = new Typed('.loading div h1', {
        strings: ["FRONT-END DEVELOPER", "YOUSSIF SALEH", "FRONT-END DEVELOPER"],
        typeSpeed: 50,
        backDelay: 3000,
        startDelay: 500,
        showCursor: false,
    })
    }, 2000)

    setTimeout (() => {
        loadContent.style.transform = 'translateY(0)'
    }, 2600)

    setTimeout (() => {
        loadingContent.style.opacity = '0'
        loadingContent.style.visibility = 'hidden'
    }, 10000)

    setTimeout (() => {
        header.style.opacity = '1'
        text.style.opacity = '1'
        text.style.transform = 'translate(0)'
        text2.style.opacity = '1'
        text2.style.transform = 'translate(0)'
        myImg.style.marginTop = '0';
        myImg.style.opacity = '1';
    }, 11000)

    setTimeout (() => {
        laptop.style.marginTop = '0'
        laptop.style.opacity = '1'
        headPhone.style.marginTop = '0'
        headPhone.style.opacity = '1'
    }, 12000)

    setTimeout (() => {
        swipeButton.style.opacity = '1'
    }, 11500)
})

swipeButton.onclick = function() {
    window.scroll({
        top: sectionScroll.offsetHeight,
        behavior: 'smooth'
    })
}

let menuOpen = document.querySelector(".open")

let menuClose = document.querySelector(".menu i.fa-plus")

let Menu = document.querySelector(".menu")

let menuItems = document.querySelectorAll("header .head .menu ul a")

menuOpen.onclick = function() {
    Menu.style.right = "0"
    menuOpen.style.rotate = "45deg"
    menuClose.style.rotate = "90deg"
    setTimeout(() => {
        menuItems.forEach(menu => {
            menu.style.marginLeft = "0"
        })
    }, 200)
}

menuClose.onclick = function() {
    Menu.style.right = "-100%"
    menuClose.style.rotate = "45deg"
    menuOpen.style.rotate = "0deg"
    menuItems.forEach(menu => {
        menu.style.marginLeft = "700px"
    })
}

AOS.init();

let imgs = document.querySelectorAll(".projects img")

let body = document.querySelector("body")

imgs.forEach(img => {
    img.addEventListener('click', (e) => {
        let overlayDiv = document.createElement('div')
        overlayDiv.classList.add("overlay-div")
        let picture = document.createElement('img')
        picture.src = e.target.src
        picture.classList.add("picture")
        overlayDiv.appendChild(picture)
        body.appendChild(overlayDiv)
        document.addEventListener('click', (ele) => {
            if (ele.target !== picture && ele.target !== img) {
                body.removeChild(overlayDiv)
            }
        })
    })
})