//mixitup

var mixer = mixitup('.work-grid');

//wow 

wow = new WOW({
    mobile:  false
})
  wow.init();

  //hamburger-menu

function openMenu(){
  document.getElementById('navbar').style.width = "100%";
} 

function closeMenu(){
  document.getElementById('navbar').style.width = "0%";
} 

//smooth scroll

$('.hamburger-menu li a').on('click', function(){
  $('html,body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  },1500);
  return false
});