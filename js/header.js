let lastScrollPosition = 0;

let headline = document.querySelector('.headline')
let header = document.querySelector('.header')
let page = document.querySelector('.page')
let anus = headline.cloneNode(true)

document.addEventListener('scroll', () => {
    lastScrollPosition = window.scrollY;

    if (lastScrollPosition >= 450) {
      
      page.insertBefore(anus, page.firstChild)
      anus.classList.add('headline-scroll-active')
      
      
   } else {
     
      anus.remove();
      anus.classList.remove('headline-scroll-active')
         

    }
  });

    
            
       