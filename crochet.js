const hoverBox = document.getElementById('menButton');
const targetBox = document.getElementById('men');

hoverBox.addEventListener('mouseenter', () => {
  targetBox.classList.add('show');
});

function hideIfNotHovered() {
  setTimeout(() => {
    if (!hoverBox.matches(':hover') && !targetBox.matches(':hover')) {
      targetBox.classList.remove('show');
    }
  }, 50);
}

hoverBox.addEventListener('mouseleave', hideIfNotHovered);
targetBox.addEventListener('mouseleave', hideIfNotHovered);

const hoverBox2 = document.getElementById('womenButton');
const targetBox2 = document.getElementById('women');

hoverBox2.addEventListener('mouseenter', () => {
targetBox2.classList.add('show');
});

function hideIfNotHovered2() {
  setTimeout(() => {
    if (!hoverBox2.matches(':hover') && !targetBox2.matches(':hover')) {
      targetBox2.classList.remove('show');
    }
  }, 50);
}

hoverBox2.addEventListener('mouseleave', hideIfNotHovered2);
targetBox2.addEventListener('mouseleave', hideIfNotHovered2);

const hoverBox3 = document.getElementById('yarnButton');
const targetBox3 = document.getElementById('yarn');

hoverBox3.addEventListener('mouseenter', () => {
  targetBox3.classList.add('show');
});

function hideIfNotHovered3() {
  setTimeout(() => {
    if (!hoverBox3.matches(':hover') && !targetBox3.matches(':hover')) {
      targetBox3.classList.remove('show');
    }
  }, 50);
}

hoverBox3.addEventListener('mouseleave', hideIfNotHovered3);
targetBox3.addEventListener('mouseleave', hideIfNotHovered3);

var slides = document.querySelectorAll('.slide')
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

var manualNav = function(manual){
  slides.forEach((slide) =>{
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    })
  })
  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) =>{
  btn.addEventListener("click", () =>{
    manualNav(i);
    currentSlide = i;
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const arrowBtn = document.getElementById('arrow');
  const contents = document.querySelectorAll('.hidden');
  
  contents.forEach(content =>{
    content.style.display = 'none';
    
  })


arrowBtn.addEventListener('click',function (){
  if(contents[0].style.display === 'none' || contents[0].style.display === ''){
    contents.forEach(content =>{
    content.style.display = 'flex';
    })
    arrowBtn.style.transform = 'rotate(180deg)';
  }
  else{
    contents.forEach(content =>{
    content.style.display = 'none';
    })  
    arrowBtn.style.transform = 'rotate(0deg)';
  }
  
  })

})