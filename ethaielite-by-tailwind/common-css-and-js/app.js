$('.owl-one').owlCarousel({
    loop:true,
    autoplay:true,
    items:1,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.owl-two').owlCarousel({
    loop:true,
    autoplay:true,
    items:1,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

        const menu = document.querySelector(".navigationMenu nav");
        const openBtn = document.querySelector(".openBtn");
        const aplyBtn = document.querySelector(".aplyBtn");
        const closeBtn = document.querySelector(".closeBtn");
        openBtn.addEventListener("click", ()=>{

            openBtn.classList.add("hidden");
            closeBtn.classList.remove("hidden");
            menu.classList.remove("hidden");
            aplyBtn.classList.remove("hidden");
        })
        closeBtn.addEventListener("click", ()=>{
            openBtn.classList.remove("hidden");
            closeBtn.classList.add("hidden");
            menu.classList.add("hidden");
            aplyBtn.classList.add("hidden");
        })