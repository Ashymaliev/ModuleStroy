$('.center').slick({
  dots: true,
  arrows:false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        arrows:true,
        slidesToScroll: 1,
        infinite: true,
        dots: false
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
  ]
});

// $('.catalog-slider').slick({
//   dots: true,
//   arrows:true,
//   infinite: true,
//   speed: 500,
//   // autoplay: true,
//   // autoplaySpeed: 3000,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   responsive: [
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//         arrows:true,
//         slidesToScroll: 2,
//         infinite: true,
//         dots: false
        
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: false
//       }
//     },
//   ]
// });