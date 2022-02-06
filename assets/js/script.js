// eslint-disable-next-line no-undef
$('.partner-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    300: {
      items: 2,
    },
    768: {
      items: 5,
    },
    1000: {
      items: 5,
    },
  },
});