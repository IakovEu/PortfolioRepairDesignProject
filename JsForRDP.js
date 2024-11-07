const imgArray = [
{url : "ImagesForRDP/section-2.png",
 city : "Rostov-on-Don <br> LCD admiral",
 area : "81 m<sup>2</sup>",
 time : "3.5 months"
},
{url :"ImagesForRDP/section-22.png",
city : "Sochi <br> Thieves",
area : "105 m<sup>2</sup>",
time : "4 months"
},
{url :"ImagesForRDP/section-222.png",
city : "Rostov-on-Don <br> Patriotic",
area : "93 m<sup>2</sup>",
time : "3 months"
}
];

const image = document.querySelector('.section-2__container-img');
const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');
const btns = document.querySelectorAll('.section-2__container-btn');
const points = document.querySelectorAll('.btn-point');
const discription = document.querySelectorAll('.inner-span');

let counter = 0;

leftArrow.addEventListener('click', function(){
    if (counter === 0){
        counter += imgArray.length - 1
    } else{
        --counter
    }
    setImgAndClass();
});

rightArrow.addEventListener('click', function(){    
    if(counter === imgArray.length - 1){
        counter += 1 - imgArray.length
    }else{
        ++counter
    }
    setImgAndClass();
}); 

function pointsOrBtns(arr){
    arr.forEach(function(elem, index){
        elem.addEventListener('click', function(){
            counter = index;
            setImgAndClass();
        })
    });
}
pointsOrBtns(btns);
pointsOrBtns(points);

function setImgAndClass(){
    image.style.backgroundImage = `url(${imgArray[counter].url})`;

    btns.forEach(function(elem){
        if (elem === btns[counter]){
            elem.classList.add('active');
        } else {
            elem.classList.remove('active');
        }
    })
    
    points.forEach(function(elem){
        if (elem === points[counter]){
            elem.classList.add('active1');
        } else {
            elem.classList.remove('active1');
        }
    })
    
    discription.forEach(function(elem, index){
        if(index === 0){
            elem.innerHTML = imgArray[counter].city
        } else if(index === 1){
            elem.innerHTML = imgArray[counter].area
        }else {
            elem.innerHTML = imgArray[counter].time
        }
    })
}


