 $(document).ready(function() {
  let owl_select = $('.select-carousel');
    owl_select.owlCarousel({
        padding: 10,
        // nav: true,
        loop: true,
        responsive: {
          0: {
            items: 3,
            autoplay:true,
            autoplayTimeout:2000,
          },
          768: {
            items: 5,
            loop:false,
          },
          1000: {
            items: 5,
            loop:false,
          }
        }
    })

   let owl_customers = $('.our-customers-employees');
    owl_customers.owlCarousel({
      autoplay:true,
      autoplayTimeout:2000,
      padding: 10,
      // nav: true,
      loop: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 4
        },
        768: {
          items: 6
        },
        992: {
          items: 8
        }
      }
    })
})

 
