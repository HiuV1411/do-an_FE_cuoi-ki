let slider = document.querySelector('.container2 .slider');
let slides = document.querySelectorAll('.container2 .slider .slide');
let dots = document.querySelectorAll('.container2 .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');;

let active = 0;
let lengthSlide = slides.length - 1;

prev.onclick = function()
{
    if(active - 1 < 0)
    {
        active = lengthSlide;
    }
    else
    {
        active -= 1;
    }
    reloadSlider();
}

next.onclick = function() 
{
    if (active + 1 > lengthSlide)
    {
        active = 0;
    }
    else
    {
        active += 1;
    }
    reloadSlider();
}

function reloadSlider()
{
    let checkLeft = slides[active].offsetLeft;
    slider.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.container2 .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}

dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})

