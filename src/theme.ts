(()=> {
    //elem
    const changeThemeElem = document.getElementById('toggleThemeImg');
    const changeThemeElemBurger = document.getElementById('toggleThemeImgBurger');
    const socialItemAll = document.querySelectorAll('.social_item');
    const imgTheme = document.querySelector('.moon_img');
    const imgThemeBurger = document.querySelectorAll('.moon_img');

//function
//1
    function changeTheme() {
        if (!localStorage.theme) localStorage.theme = 'light';
        document.body.className = localStorage.theme;
        changeThemeElem!.onclick = () => {
            document.body.classList.toggle('dark');
            localStorage.theme = document.body.className;
            addLightElem();
            changeImgTheme();
            burgerTheme()
        };
        if (!localStorage.theme) localStorage.theme = 'light';
        document.body.className = localStorage.theme;
        changeThemeElemBurger!.onclick = () => {
            document.body.classList.toggle('dark');
            localStorage.theme = document.body.className;
            addLightElem();
            changeImgTheme();
            burgerTheme()
        };
    }

//2
    function addLightElem() {
        if (localStorage.theme === 'light') socialItemAll.forEach((item) => item.classList.remove('social_light'));
        if (localStorage.theme === 'light dark') socialItemAll.forEach((item) => item.classList.add('social_light'));
    }

//3
    function changeImgTheme() {
        if (localStorage.theme === 'light') imgTheme!.classList.remove('sun_img');
        if (localStorage.theme === 'light dark') imgTheme!.classList.add('sun_img');
    }

//4
    function burgerTheme() {
        if (localStorage.theme === 'light') imgThemeBurger.forEach((item) => item.classList.remove('sun_img'));
        if (localStorage.theme === 'light dark') imgThemeBurger.forEach((item) => item.classList.add('sun_img'));
    }

//5
    sessionStorage.setItem("is_reloaded", 'true');
    if (sessionStorage.getItem("is_reloaded")) {
        addLightElem();
        changeImgTheme();
        burgerTheme()
    }
    changeTheme();
})()
