const burger = (burgerSelector, menuSelector) => {
    const burger = document.querySelector(burgerSelector);
    const menu = document.querySelector(menuSelector);

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        if (burger.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            document.body.style.maxHeight = '100vh';
        }
        else {
            document.body.style.overflow = '';
            document.body.style.maxHeight = '';
        }
    })
};

export default burger;