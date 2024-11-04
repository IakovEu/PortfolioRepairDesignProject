const imgArray = [
"ImagesForRDP/section-2.png",
"ImagesForRDP/section-22.png",
"ImagesForRDP/section-222.png"
];

const image = document.querySelector('.section-2__container-img');
const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');
const btns = document.querySelectorAll('.section-2__container-btn');
const points = document.querySelectorAll('.btn-point');

let counter = 0;

leftArrow.addEventListener('click', function(){
    if (counter === 0){
        counter += imgArray.length - 1
    } else{
        --counter
    }
    image.style.backgroundImage = `url(${imgArray[counter]})`;
    act1();
    act2();
});

rightArrow.addEventListener('click', function(){    
    if(counter === imgArray.length - 1){
        counter += 1 - imgArray.length
    }else{
        ++counter
    }
    image.style.backgroundImage = `url(${imgArray[counter]})`;
    act1();
    act2();
}); 

btns.forEach(function(elem){
    elem.addEventListener('click', function(){
        if(elem === btns[0]){
            counter = 0;
            image.style.backgroundImage = `url(${imgArray[0]})`;
        } else if(elem === btns[1]){
            counter = 1;
            image.style.backgroundImage = `url(${imgArray[1]})`;
        } else {
            counter = 2;
            image.style.backgroundImage = `url(${imgArray[2]})`;
        }
        act1();
        act2();
    })
});

points.forEach(function(elem){
    elem.addEventListener('click', function(){
        if(elem === points[0]){
            counter = 0;
            image.style.backgroundImage = `url(${imgArray[0]})`;
        } else if(elem === points[1]){
            counter = 1;
            image.style.backgroundImage = `url(${imgArray[1]})`;
        } else {
            counter = 2;
            image.style.backgroundImage = `url(${imgArray[2]})`;
        }
        act1();
        act2();
    })
});

function act1(){
    btns.forEach(function(elem){
        if (elem === btns[counter]){
            elem.classList.add('active');
        } else {
            elem.classList.remove('active');
        }
    })
}

function act2(){
    points.forEach(function(elem){
        if (elem === points[counter]){
            elem.classList.add('active1');
        } else {
            elem.classList.remove('active1');
        }
    })
}
