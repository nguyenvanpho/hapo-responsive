 $(document).ready(function() {
   $('.select-carousel').slick({
     dots: false,
     infinite: true,
     speed: 300,
     slidesToShow: 5,
     slidesToScroll: 1,
     focusOnSelect: true,
     cssEase: 'linear',
     responsive: [
       {
         breakpoint: 767,
         settings: {
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 2,
         }
       }
     ]
   });

   $('.our-customers-employees').slick({
     dots: true,
     infinite: true,
     speed: 300,
     slidesToShow: 8,
     // slidesToScroll: 5,
     autoplay: true,
     autoplaySpeed: 2000,
     loop:true,
     asNavFor: '.our-customers-detail',
     focusOnSelect: true,
     cssEase: 'linear',
     centerMode: true,
     centerPadding: '20px',
     responsive: [
       {   
         breakpoint: 767,
         settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerPadding: '0px',
         }
       },
       {   
         breakpoint: 991,
         settings: {
            slidesToShow: 8,
            centerPadding: '0px',
         }
       },
        {   
         breakpoint: 1199,
         settings: {
            slidesToShow: 8,
            centerPadding: '0px',
         }
       }
     ]
   });
 
  $('.our-customers-detail').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     infinite: true,
     asNavFor: '.our-customers-employees'
  });

});
