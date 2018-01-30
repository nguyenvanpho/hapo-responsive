 $(document).ready(function() {
    var owl = $('.select-carousel');
      owl.owlCarousel({
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
              items: 5
            },
            1000: {
              items: 5
            }
          }
      })
      $('.play').on('click', function() {
          owl.trigger('play.owl.autoplay', [1000])
      })
      $('.stop').on('click', function() {
          owl.trigger('stop.owl.autoplay')
  })
})

 
 $(document).ready(function() {
              var owl = $('.our-customers-employees');
              owl.owlCarousel({
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