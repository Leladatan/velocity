const parallax_bg = document.querySelector('.parallax-bg');
window.addEventListener('mousemove', function (event) {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    const parallaxSpeed = parallax_bg.getAttribute('data-speedParallax');
    parallax_bg.style.transform = 'translate(-' + x * parallaxSpeed + 'px, -' + y * parallaxSpeed + 'px)';
});