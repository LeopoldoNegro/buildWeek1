let nImg = 0;

function prossima() {
  nImg++;

  if (nImg > 4) {
    nImg = 0;
  }

  currentSlide(nImg)
}
function currentSlide(n) {
  nImg=n
  document.getElementsByClassName("slider-container")[0].style.transform = "translateX(" + -265 * n + "px)";
}


//onscroll-blog//

window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    // else{
    //   reveals[i].classList.remove('active');

    // }
  }
}