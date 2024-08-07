/*
document.addEventListener('DOMContentLoaded', () => {
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
document.addEventListener('DOMContentLoaded', () => {
    // Preload images and videos
    const gifS = [
        'media/vid1.mp4',
        'media/vid3.mp4',
        'media/vid2.mp4',
        'media/vid4.mp4',
        'media/vid5.mp4'
    ];

    gifS.forEach((video, index) => {
        const videoPreload = document.createElement('video');
        videoPreload.src = video;
        videoPreload.preload = 'auto';
        videoPreload.loop = true;
        videoPreload.muted = true;
        videoPreload.playsInline = true;

        // Add video to the corresponding image container
        const container = document.querySelectorAll('.image-container')[index];
        if (container) {
            const existingVideo = container.querySelector('.animated-video');
            if (existingVideo) {
                container.replaceChild(videoPreload, existingVideo);
            } else {
                videoPreload.classList.add('animated-video');
                container.appendChild(videoPreload);
            }
        }
    });

    // Show image containers
    document.querySelectorAll('.image-container').forEach(container => {
        container.style.display = 'block';
    });

    // Play videos on hover
    document.querySelectorAll('.image-container').forEach(container => {
        container.addEventListener('mouseenter', () => {
            const video = container.querySelector('video');
            if (video) video.play();
        });
        container.addEventListener('mouseleave', () => {
            const video = container.querySelector('video');
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });
    });

    // Slider functionality
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    let slide = document.querySelector('.slide');
    let items = document.querySelectorAll('.item');

    next.addEventListener('click', function() {
        slide.appendChild(items[0]);
        items = document.querySelectorAll('.item');
    });

    prev.addEventListener('click', function() {
        slide.prepend(items[items.length - 1]);
        items = document.querySelectorAll('.item');
    });
});