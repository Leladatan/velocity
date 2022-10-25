(() => {
    const sidebar = document.querySelector <HTMLDivElement>('#sidebar');
    const sidebarToggler = document.querySelector('.sidebar_toggler');

    sidebarToggler!.addEventListener('click', () => {
        sidebar!.classList.toggle('show');
        sidebar!.style.display = 'block';
        document.body.style.overflow = 'hidden';
        sidebarToggler!.addEventListener('click', () => {
            if (document.body.style.overflow === 'hidden' && !sidebar!.classList.contains('show')) {
                document.body.style.overflow = 'visible';
                sidebar!.style.display = 'none';
            }
        })
    });

    window.addEventListener('click', (e) => {
        if ((<HTMLElement>e.target).id !== 'sidebar' && (<HTMLElement>e.target).className !== 'sidebar_toggler') {
            sidebar!.classList.remove('show');
            document.body.style.overflow = 'visible'
        }
    });
})();