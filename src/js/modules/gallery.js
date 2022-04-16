const gallery = () => {
    let menuItems = document.querySelector('.menu__items');
    let colorsElement = JSON.parse(localStorage.getItem('allGradient'));
    let fullGradient = JSON.parse(localStorage.getItem('allFullGradient'));
    
    menuItems.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('menu__item-gradient-btn')) {
            let nowIndex = e.target.parentElement.getAttribute('data-item');
            colorsElement.splice(nowIndex, 1);
            fullGradient.splice(nowIndex, 1);
            localStorage.setItem('allGradient', JSON.stringify(colorsElement));
            localStorage.setItem('allFullGradient', JSON.stringify(fullGradient));
            e.target.parentElement.remove();
        }
    });
};

export default gallery;