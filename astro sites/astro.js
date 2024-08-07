
/*document.addEventListener('DOMContentLoaded', () => {
    // Preload images
    const gifS = [
        'media/vid1.mp4',
        'media/vid3.mp4',
        'media/vid2.mp4',
        'media/vid4.mp4',
        'media/vid5.mp4'
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
    let items = document.querySelectorAll('.item');
    let currentIndex = 0;

    function updateSlide() {
        items.forEach((item, index) => {
            item.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
            item.style.opacity = (index === currentIndex) ? '1' : '0.5';
        });
    }


    next.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        slide.appendChild(items[0]); // Move the first item to the end
    });

    prev.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        slide.prepend(items[items.length - 1]); // Move the last item to the beginning
    });
});
*/
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
});

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
