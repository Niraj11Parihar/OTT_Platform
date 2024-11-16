let i = 0;
const pix = ["b1.jpg", "b2.webp", "b3.jpg"];
const imagePath = "../assets/images/";

function show() {
  let slide = document.getElementById("slide");
  slide.classList.remove('slide-in', 'slide-out');
  void slide.offsetWidth; // Trigger reflow to restart animation
  slide.classList.add('slide-out');

  setTimeout(() => {
    slide.src = imagePath + pix[i];
    slide.classList.remove('slide-out');
    slide.classList.add('slide-in');
    i = (i + 1) % pix.length;
  }, 1000); // Time for slide-out animation
}

setInterval(show, 5000); // Change slide every 5 seconds
