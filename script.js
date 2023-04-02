const buttona = document.querySelector('.buttona');

const mouseHoverAnimation = () => {
  anime({
    targets: buttona,
    width: '120%',
    scale: {
      delay: 800,
      value: 1.5
    },
    duration: 1500
  })
}
const mouseOutAnimation = () => {
  anime({
    targets: buttona,
    width: '50%',
    scale: {
      delay: 800,
      value: 1.5
    },
    duration: 1500
  })
}
buttona.addEventListener('mouseover', mouseHoverAnimation)
buttona.addEventListener('mouseout', mouseOutAnimation)
// var scrollEventHandler = function()
// {
//   window.scroll(0, window.pageYOffset)
// }

// window.addEventListener("scroll", scrollEventHandler, false);
const myVideo = document.getElementById("myVideo");
const playpausebtn = document.getElementById("playpausebtn");

playpausebtn.addEventListener("click", function() {
  if (myVideo.paused) {
    myVideo.play();
  } else {
    myVideo.pause();
  }
});
