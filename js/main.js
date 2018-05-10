   $(document).ready(function() {



    const $window = $(window);  
    const wLetter = $('.wLetter');
    const cLetter = $('.cLetter');
    const prev = 0;
    const work = $('#work');
    const portfolio = $('#portfolio');
    const contact = $('#contact');
    const contactInfo = $('#contact-info');

    
//nav

function menuScroll(){

  const navbar = $('.navigation');
  const navbarH = navbar.height();
  const topScroll = $(document).scrollTop();

  if(topScroll > navbarH){
    navbar.addClass('nav-shadow'); 
  } else if (topScroll <= navbarH) {
    navbar.removeClass('nav-shadow'); 
  } 

}

menuScroll();
$(document).on('scroll', function(){
  menuScroll();
})



//nav mobilny

$("nav").click(function(e){
  if (!$(".nav-list").hasClass("open")) {
    $(".nav-list").addClass("open");
  } else {
    $(".nav-list").removeClass("open");
  }
});





//animation svg
function showLetter(letter) {
  $window.on('scroll', function() {
    var pad = Math.max(0, $window.height() - 100);
    var scrollTop = $window.scrollTop();

    if (!letter.hasClass('path') && $window.scrollTop() + pad > letter.offset().top) {
      letter.addClass('path');
      return;
    } 
  });
}

showLetter(wLetter);
showLetter(cLetter);


// section animation  

function sectionAnimation(section) {
  $window.on('scroll', function() {
    var pad = Math.max(0, $window.height() - 50);
    var scrollTop = $window.scrollTop();

    if (!section.hasClass('section_animation') && $window.scrollTop() + pad > section.offset().top) {
      section.addClass('section_animation');
      return;
    } 
  });
}

sectionAnimation(portfolio);
sectionAnimation(work); 
sectionAnimation(contact);
sectionAnimation(contactInfo); 


// slider

$('.mySlides').first().addClass('active');

$('.next').on('click', function() {
  $('.active').removeClass('active').addClass('oldActive');

  if($('.oldActive').is(":last-child")) {
    $('.mySlides').first().addClass('active');
  } else {
    $('.oldActive').next().addClass('active');
  }

  $('.oldActive').removeClass('oldActive');

})


$('.prev').on('click', function() {
  $('.active').removeClass('active').addClass('oldActive');

  if($('.oldActive').is(":first-child")) {
    $('.mySlides').last().addClass('active');
  } else {
    $('.oldActive').prev().addClass('active');
  }

  $('.oldActive').removeClass('oldActive');



})

}); 