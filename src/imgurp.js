var Imgrup = {
  ImgClass: '.post-image img',
  PlayerStyle: " \
    position: absolute; \
    background-color: black; \
    left: 0px; \
    top: 0px; \
    width: 99%; \
    height: 99%; \
    z-index: 99999; \
    padding: 10px; \
    overflow: hidden; \
  ",

  PlayerClass: 'imgurp-player',

  ImgClass: '.post-image img',

  player: null,

  images: [],

  init: function() {
    this.setImages();
    this.player();
  },

  player: function() {
    var player = document.createElement('div');
    player.setAttribute('style', this.PlayerStyle);
    player.setAttribute('class', this.PlayerClass);
    document.body.append(player);
    player.append(this.images()[0])
    this.player = player;
  },

  startGallery: function() {
  },

  setImages: function() {
    if (!this.images[0]) {
      this.images = document.querySelectorAll(this.ImgClass);
    }

    return this.images;
  }
};

var StartButton = {
  prevButtonClass: '.next-prev',
  prevButton: null,
  cssClass: "btn btn-action",
  textContent: 'Slideshow',
  style: "margin-left: 5px; \
    padding-top: 11px; \
    padding-bottom: 11px; \
  ",

  attach: function() {
    this.prevButton = document.querySelectorAll(
      this.prevButtonClass
    )[0];

    this.prevButton.append(this.element());
  },

  element: function() {
    var e = document.createElement('div');
    e.setAttribute('style', this.style);
    e.setAttribute('class', StartButton.cssClass);
    e.textContent = StartButton.textContent;
    e.addEventListener("click", function(event) {
      Imgrup.init();
    })
    return e;
  }
}

StartButton.attach();

console.log('loaded');
