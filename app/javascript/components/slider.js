// function Slider () {
//   const slideIndex = 1;
//   let timer = null;
//   showSlides(slideIndex);

//   function plusSlides(n) {
//     clearTimeout(timer);
//     showSlides(slideIndex += n);
//   }

//   function currentSlide(n) {
//     clearTimeout(timer);
//     showSlides(slideIndex = n);
//   }

//   function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     if (n==undefined){n = ++slideIndex}
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     slides[slideIndex-1].style.display = "block";
//     timer = setTimeout(showSlides, 200000000);
//   }
// }

// export { Slider } ;
