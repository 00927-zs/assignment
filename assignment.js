const lt = document.getElementById('lt');
const gt = document.getElementById('gt');
const carousel = document.querySelector('.carousel');
const boxes = document.querySelectorAll('.box');
let index = 0;

function updatebtn() {
  lt.classList.remove('hidden');
  gt.classList.remove('hidden');

  if (index === 0) {
    lt.classList.add('hidden');
  }

  if (index === boxes.length - 1) {
    gt.classList.add('hidden');
  }
}

function moveBoxes() {
  const boxWidth = boxes[0].getBoundingClientRect().width;
  carousel.style.transform = `translateX(${-1 * boxWidth * index}px)`;
}

updatebtn();

gt.addEventListener('click', () => {
  index++;
  updatebtn();
  moveBoxes();
});

lt.addEventListener('click', () => {
  index--;
  updatebtn();
  moveBoxes();
});

window.addEventListener('resize', () => {
  moveBoxes();
});


const modal = document.getElementById('modalArea');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.getElementById('closeBtn');
const thumbnails = document.querySelectorAll('.box');

thumbnails.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src; 
    }
});

closeBtn.onclick = function() {
    modal.style.display = "none";
}