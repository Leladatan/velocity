(() => {
    const parallax_bg = document.querySelector('.parallax-bg') as HTMLDivElement;
    window.addEventListener('mousemove', function (event) {
        const x: number = event.clientX / window.innerWidth;
        const y: number = event.clientY / window.innerHeight;
        const parallaxSpeed = parallax_bg!.getAttribute('data-speedParallax');
        parallax_bg!.style.transform = `translate(-${x} * ${parallaxSpeed}px, -${y} * ${parallaxSpeed}px)`;
    });
})();