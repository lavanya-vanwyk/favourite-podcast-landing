//header animation//
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
  let normalizedPosition = e.pageX / (width/2) - 1;
  let speedSlow = 100 * normalizedPosition;
  let speedFast = 200 * normalizedPosition;
  spansSlow.forEach((span) => {
    span.style.transform = `translate(${speedSlow}px)`;
  });
  spansFast.forEach((span) => {
    span.style.transform = `translate(${speedFast}px)`
  })
}
/*recalculate width when the window is resized*/
function handleWindowResize() {
  width = window.innerWidth;
}
//header animation//

//carousel//
let currentIndex = 0;
function showVideo(index) {
    const videos = document.querySelectorAll('.carousel-item');
    if (index >= videos.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = videos.length - 1;
    }
	/*currentIndex multiplied by the width of the video*/
    
	const carousel = document.querySelector('.carousel');
    const carouselWidth = parseFloat(getComputedStyle(carousel).width); // Get the computed width of the carousel.
    const offset = -currentIndex * carouselWidth; // Calculate the offset based on currentIndex.

    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}px)`;
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex++;
    showVideo(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex--;
    showVideo(currentIndex);
});
//carousel//

