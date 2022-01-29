///////////burger///////

$(document).ready(function(){
   $('.header__burger').click(function(event){
     $('.header__burger, .nav').toggleClass('active');
     $('body').toggleClass('lock');
   });
 });


 $(document).ready(function() {
    $('.nav__link').click(function(event) {
        $('.header__burger, .nav').removeClass('active');
        $('body').removeClass('lock');
    });
});


/////////////////
function initSearchForm(){
let input = document.querySelector('.search__input');
let btnOpen = document.querySelector('.search__btn');
let btnClose =  document.querySelector('.close__btn');

btnOpen.addEventListener('click', function(){
   input.classList.add('active')
   btnClose.classList.add('active')
})
btnClose.addEventListener('click', function(){
   input.classList.remove('active')
   this.classList.remove('active')
})
}
initSearchForm();

// ////////////////////////////////// icon scrollup

let upBtn = document.getElementById ('scrollup');
window.addEventListener('scroll', function(){
    if (wHeight < window.scrollY){
        upBtn.classList.add('scrollup_active')
    }
    else {
        upBtn.classList.remove('scrollup_active')

    }
})

let wHeight = window.innerHeight;
window.addEventListener('resize', function(){
    wHeight = window.innerHeight;
})

let sectionHight = 0
for (let link of document.getElementsByClassName('nav__link')){
    link.addEventListener('click', function(e){
        e.preventDefault();
        let id_section = this.getAttribute('href') //#section
        let pos = document.querySelector(id_section).getBoundingClientRect();
        window.scrollTo({
        top: document.querySelector(id_section).offsetTop - 110,
        left: 0,
        behavior: 'smooth'
    });
    })
}
