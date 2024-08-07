/*document.querySelectorAll('.item').forEach(item =>{
    item.addEventListener('mouseover',()=>{
        let img=item.querySelector('img');
        img.jpg=item.style.backgroundImage.slice(5,-2);
    });
    item.addEventListener('mouseout',()=>{
        let img=item.querySelector('img');
        img.jpg=img.dataset.static;
    });
});*/
document.addEventListener('DOMContentLoaded', () => {
    // Preload images
    const gifS = [
        'vid1.mp4',
        'vid3.mp4',
        'vid2.mp4',
        'vid4.mp4',
        'vid5.mp4'
    ];

    gifS.forEach(video => {
        const videoPreload = document.createElement('video');
        videoPreload.src = video;
        videoPreload.preload = 'auto';
    });

    // Show image containers
    document.querySelectorAll('.image-container').forEach(container => {
        container.style.display = 'block';
    });

    // Slider functionality
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    let slide = document.querySelector('.slide');

    next.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        slide.appendChild(items[0]); // Move the first item to the end
    });

    prev.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        slide.prepend(items[items.length - 1]); // Move the last item to the beginning
    });
});


/*
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
    document.body.style.backgroundImage = `url(${items[0].style.backgroundImage.slice(5, -2)})`;
});

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
    document.body.style.backgroundImage = `url(${items[items.length - 1].style.backgroundImage.slice(5, -2)})`;
});
*/

/*
document.addEventListener('DOMContentLoaded',()=>{
    const slides=document.querySelectorAll('.slide .item');
    const prev=document.querySelector('.prev');
    const next=document.querySelector('.next');
    let currIndex=0;

    const gifs=[
        'gif1.gif',
        'gif2.gif',
        'gif3.gif',
        'gif4.gif',
        'gif5.gif'
    ];
    const img=[
        'img1.jpg',
        'img2.jpg',
        'img3.jpg',
        'img4.jpg',
        'img5.jpg',
    ];

    function showSlide(index){
        slides.forEach((slide,i)=>{
            if(i === index){
                slide.style.backgroundImage= `url(${img[index]})`;
                slide.style.display='block';
                slide.dataset.isGif='false';

            }
            else{
                slide.style.display='none';
            }
        });
    }
    prev.addEventListener('click',()=>{
        currIndex=(currIndex>0)?currIndex-1:slides.length-1;
        showSlide(currIndex);
    });
    next.addEventListener('click',()=>{
        currIndex=(currIndex< slides.length-1)? currIndex+1:0;
        showSlide(currIndex);
    });
    
    slides.forEach((slide,i)=>{
        slide.addEventListener('click',()=>{
            if(slide.dataset.isGif=== 'false'){
                slide.style.backgroundImage=`url(${gifs[i]})`;
                slide.dataset.isGif='true';
            }
            else{
                slide.style.backgroundImage=`url(${img[i]})`;
                slide.dataset.isGif='false';
            }
        });
    });
    showSlide(currIndex);
});


document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide .item');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currIndex = 0;

    const gifs = [
        'gif1.gif',
        'gif2.gif',
        'gif3.gif',
        'gif4.gif',
        'gif5.gif'
    ];
    const img = [
        'img1.jpg',
        'img2.jpg',
        'img3.jpg',
        'img4.jpg',
        'img5.jpg'
    ];

    // Function to show the current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'inline-block'; // Ensure the current slide is displayed
                if (slide.dataset.isGif === 'true') {
                    slide.style.backgroundImage = `url(${gifs[index]})`;
                } else {
                    slide.style.backgroundImage = `url(${img[index]})`;
                }
            } else {
                slide.style.display = 'none';
            }
        });
    }

    // Event listener for the previous button
    prev.addEventListener('click', () => {
        currIndex = (currIndex > 0) ? currIndex - 1 : slides.length - 1;
        showSlide(currIndex);
    });

    // Event listener for the next button
    next.addEventListener('click', () => {
        currIndex = (currIndex < slides.length - 1) ? currIndex + 1 : 0;
        showSlide(currIndex);
    });

    // Event listener for clicking on a slide
    slides.forEach((slide, i) => {
        slide.addEventListener('click', () => {
            slide.dataset.isGif = (slide.dataset.isGif === 'true') ? 'false' : 'true';
            showSlide(currIndex);
        });
    });

    // Initialize the first slide
    showSlide(currIndex);
});*/