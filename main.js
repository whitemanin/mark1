let toContact = document.querySelector('.to__contact')

let buttonApplication = document.querySelector('#menu__link__application')
let buttonBiography = document.querySelector('#menu__link__biography')
let buttonHobbies = document.querySelector('#menu__link__hobbies')
let buttonGallery = document.querySelector('#menu__link__gallery')
let buttonContacts = document.querySelector('#menu__link__contacts')

let prev = document.querySelector('.prev')
let next = document.querySelector('.next')

const menuLinks = document.querySelectorAll('.menu__link[data-goto]')

let buttonTelegram = document.querySelector('#icon_telegram')
let buttonInstagram = document.querySelector('#icon_instagram')

let buttonTelegramInversion = document.querySelector('#icon_telegram_inversion')
let buttonInstagramInversion = document.querySelector('#icon_instagram_inversion')

if (menuLinks.length > 0){
    menuLinks.forEach(menuLinks => {
        menuLinks.addEventListener('click', onMenuLinkClick)
    })
    function onMenuLinkClick(e) {
        const menuLink = e.target
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto)
            const  gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            })
            e.preventDefault()
        }
    }
}


toContact.addEventListener('mouseenter', function () {
    this.style.backgroundColor = '#CFCFCF'
    this.style.transform = 'scale(1.05)'
    this.style.boxShadow = '1.5px 1.5px 1.5px 1.5px #757575'
})
toContact.addEventListener('mouseleave', function () {
    this.style.backgroundColor = 'white'
    this.style.transform = 'none'
    this.style.boxShadow = 'none'
})
toContact.addEventListener('click', function () {
    window.open('https://t.me/maninwhiteman')
})

buttonApplication.addEventListener('mouseenter', function () {
    this.style.color = '#CFCFCF'
    this.style.borderBottom = '1.5px solid #CFCFCF'

})
buttonApplication.addEventListener('mouseleave', function () {
    this.style.color = 'white'
    this.style.borderBottom = '0'
})


buttonBiography.addEventListener('mouseenter', function () {
        this.style.color = '#CFCFCF'
        this.style.borderBottom = '1.5px solid #CFCFCF'
    })
buttonBiography.addEventListener('mouseleave', function () {
        this.style.color = 'white'
        this.style.borderBottom = '0'
    })


buttonHobbies.addEventListener('mouseenter', function () {
        this.style.color = '#CFCFCF'
        this.style.borderBottom = '1.5px solid #CFCFCF'
    })
buttonHobbies.addEventListener('mouseleave', function () {
        this.style.color = 'white'
        this.style.borderBottom = '0'
    })


buttonGallery.addEventListener('mouseenter', function () {
        this.style.color = '#CFCFCF'
        this.style.borderBottom = '1.5px solid #CFCFCF'
    })
buttonGallery.addEventListener('mouseleave', function () {
        this.style.color = 'white'
        this.style.borderBottom = '0'
    })


buttonContacts.addEventListener('mouseenter', function () {
        this.style.color = '#CFCFCF'
        this.style.borderBottom = '1.5px solid #CFCFCF'
    })
buttonContacts.addEventListener('mouseleave', function () {
        this.style.color = 'white'
        this.style.borderBottom = '0'
    })


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide_menu");
    for (i = 2; i < slides.length; i++) {
        slides[0].style.display = "none";
        slides[slideIndex - 1].style.display = "block";
    }
}

next.addEventListener('click', function () {
    prev.style.padding = '16px'
    prev.style.fontSize = '18px'
    next.style.padding = '0'
    next.style.fontSize = '0'
})
prev.addEventListener('click', function () {
    prev.style.padding = '0'
    prev.style.fontSize = '0'
    next.style.padding = '16px'
    next.style.fontSize = '18px'
})

buttonTelegram.addEventListener('click', function () {
    window.open('https://t.me/maninwhiteman')
})
buttonInstagram.addEventListener('click', function () {
    window.open('https://instagram.com/_m_a_x_w_h_i_t_e_27?utm_medium=copy_link')
})

buttonTelegramInversion.addEventListener('click', function () {
    window.open('https://t.me/maninwhiteman')
})
buttonInstagramInversion.addEventListener('click', function () {
    window.open('https://instagram.com/_m_a_x_w_h_i_t_e_27?utm_medium=copy_link')
})




