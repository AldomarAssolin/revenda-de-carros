
/*
var closeBtn = document.querySelector('#closeBtn')
var modal = document.querySelector('.modal')
var btnFiesta = document.querySelector('.btnFiesta')
closeBtn.addEventListener('click', closeModal)
btnFiesta.addEventListener('click', openModal)

function openModal(){
    //console.log('clicando')
    if(modal == 'block'){
        //console.log('click')
        modal.style.display = 'none'
    }else{
        modal.style.display = 'block'
    }
}
function closeModal(){
    //console.log('clicando')
    if(modal == 'none'){
        //console.log('click')
        modal.style.display = 'block'
    }else{
        modal.style.display = 'none'
    }
}
*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}