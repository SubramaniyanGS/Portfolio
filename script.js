const iconToggle=document.querySelector('.toggle_icon');
const navbarMenu=document.querySelector('.menu');
const menuLinks=document.querySelectorAll('.menu-link');
const iconClose=document.querySelector('.close_icon');

iconToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});
 
iconClose.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    })
})

//Change Bacground Header
function scrollHeader() {
    const header=document.getElementById('header');
    this.scrollY >=20 ? header.classList.add('active') : header.classList.remove('active');
};

window.addEventListener('scroll',scrollHeader);

/* Hero Type Effect */
document.addEventListener('DOMContentLoaded', function () {
    const typed = document.querySelector('.typed');
  
    if (typed) {
      let typed_strings = typed.getAttribute('data-typed-items');
      typed_strings = typed_strings.split(',');
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  });

  //Scroll section active link
  const sections = document.querySelectorAll('section[id]');

  function scrollActive() {
      const scrollY = window.pageYOffset;
  
      sections.forEach(section => {
          const sectionHeight = section.offsetHeight;
          const sectionTop = section.offsetTop - 100;
  
          let sectionId = section.getAttribute('id');
  
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              const link = document.querySelector('.menu a[href*=' + sectionId + ']');
              if (link) {
                  link.classList.add('active-link');
              }
          } else {
              const link = document.querySelector('.menu a[href*=' + sectionId + ']');
              if (link) {
                  link.classList.remove('active-link');
              }
          }
      });
  }
  
  window.addEventListener('scroll', scrollActive);
  

  //Resume Scroll
  const pages = document.querySelectorAll('.page');
const resumeTabs = document.querySelector('.resume-tabs');

function resumeActive() {
    const scrollY = window.pageYOffset;

    pages.forEach(page => {
        const sectionHeight = page.offsetHeight;
        const sectionTop = page.offsetTop;

        let sectionId = page.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            const link = resumeTabs.querySelector('a[href*=' + sectionId + ']');
            if (link) {
                link.classList.add('current');
            }
        } else {
            const link = resumeTabs.querySelector('a[href*=' + sectionId + ']');
            if (link) {
                link.classList.remove('current');
            }
        }
    });
}

window.addEventListener('scroll', resumeActive);

//Services section

let modalBtns=document.querySelectorAll('.services-button'),
    modalViews=document.querySelectorAll('.services-modal'),
    modalClose=document.querySelectorAll('.modal-close-icon');

let modal=function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click',()=>{
        modal(i)
    })
})

modalClose.forEach(el=>{
    el.addEventListener('click',()=>{
        modalViews.forEach(modalView=>{
            modalView.classList.remove('active-modal');
        })
    })
})

