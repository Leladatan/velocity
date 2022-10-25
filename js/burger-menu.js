const sidebar = document.querySelector('#sidebar');
const sidebarToggler = document.querySelector('.sidebar_toggler');

sidebarToggler.addEventListener('click', (e) => {
    sidebar.classList.toggle('show');
    sidebar.style.display = 'block';
    document.body.style.overflow = 'hidden';
    sidebarToggler.addEventListener('click', (e) => {
        if (document.body.style.overflow === 'hidden' && !sidebar.classList.contains('show')){
            document.body.style.overflow = 'visible';
            sidebar.style.display = 'none';
        }
    })
});

window.addEventListener('click', (e) => {
    if (e.target.id !== 'sidebar' && e.target.className !== 'sidebar_toggler') {
        sidebar.classList.remove('show');
        document.body.style.overflow = 'visible'
    }
});
