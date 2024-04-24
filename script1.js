
var tl = gsap.timeline({scrollTrigger:{
  trigger:"#two",
  start:"0% 95%",
  end:"70% 60%",
  scrub:true, //reverse animation
  
}})

tl.to("#db",{
  top:"110%",
  left:"-5%",
},'dum')

tl.to("#db-1",{
  top:"140%",
  left:"19%"

},'dum')

gsap.to(".imagecontainer",{
    ease:Expo.easeInOut,
    width:"100%",
    duration:2,
    stagger:2,
    repeat: -1 
})


gsap.to(".text h1",{
    ease:Expo.easeInOut,
    stagger:3,
    top:"0"
})
gsap.to(".text h1",{
    delay:2,
    ease:Expo.easeInOut,

    top:"-100%"
})

let subMenu=document.getElementById("subMenu");
function toggleMenu(){
  subMenu.classList.toggle("open-menu");
}

function animateText() {
  gsap.to(".text h1", {
      duration:2,
      ease: Expo.easeInOut,
      stagger:0.2,
      top: "0",
      onComplete: function() {
          gsap.to(".text h1", {
            duration:0.8, 
            delay:4,  
            ease: Expo.easeInOut,
             top: "-100%",
              onComplete: animateText // Restart the animation
          });
      }
  });
}
// Start the animation
animateText();
var swiper = new Swiper(".mySwiper", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




