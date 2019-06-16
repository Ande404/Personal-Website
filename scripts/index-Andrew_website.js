/*Controls navigation Animation*/
$(window).on('scroll', function(){
  if($(window).scrollTop()){
    $('nav').addClass('white');
  }
  else {
    $('nav').removeClass('white');
  }
});


function navSlide () {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.list');
  const navLinks = document.querySelectorAll('.list li');
  const material = document.querySelector('.material-icons');

  menu.addEventListener('click', function() {
    //toggle nav
    nav.classList.toggle('nav-active');

    //Animate links
    navLinks.forEach(function(link, index) {
      if(link.style.animation) {
        link.style.animation = '';
      }
      else {
        link.style.animation = `navLinkFade 0.6s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    //toggle close animation
    if(material.innerHTML === 'menu'){
      material.innerHTML = 'close';
    }
    else {
      material.innerHTML = 'menu';
    }

  });
}

navSlide();

/* updates copyright year*/
var year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;
