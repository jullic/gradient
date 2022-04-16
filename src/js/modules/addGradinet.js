import {allColors, gradientValue} from './gradient';

const addGradinet = () => {
    const btn = document.querySelector('.gradient__place-btn');
    const menuItems = document.querySelector('.menu__items');
    let allGradient;
    let allFullGradient = localStorage.getItem('allFullGradient') ? JSON.parse(localStorage.getItem('allFullGradient')) : [];
    
    if (localStorage.getItem('allGradient')) {
        allGradient = JSON.parse(localStorage.getItem('allGradient'));
    }
    else {
        allGradient = [];
    }
    let nowIndex = allGradient.length;
    
    btn.addEventListener('click', () => {
        createElement();
    });

    function startElements() {
        for (let i = allGradient.length - 1; i >= 0; i--) {
            let li = document.createElement('li');
            let conf = document.createElement('div');
            li.setAttribute('data-item', i);
            li.classList.add('menu__item');
            conf.classList.add('menu__item-conf', 'menu__item-gradient-colors');
            for (let j = 0; j < allGradient[i].length; j++) {
                conf.innerHTML += `<div class="menu__item-gradient-color">${allGradient[i][j]}</div>`;
            }
            let place = document.createElement('div');
            place.classList.add('menu__item-conf', 'menu__item-gradient-place');
            place.style.background = allFullGradient[i];
            li.append(conf);
            li.append(place);
            li.innerHTML += `<button class="menu__item-conf menu__item-gradient-btn remove">X</button>`;
            menuItems.append(li);
        }
    }
    startElements();
    
    function createElement() {
        if (allColors.length === 0) {
            return;
        }
        let li = document.createElement('li');
        let conf = document.createElement('div');
        nowIndex++;
        li.setAttribute('data-item', nowIndex - 1);
        li.classList.add('menu__item');
        conf.classList.add('menu__item-conf', 'menu__item-gradient-colors');
        for (let i = 0; i < allColors.length; i++) {
            conf.innerHTML += `<div class="menu__item-gradient-color">${allColors[i]}</div>`;
        }
        let place = document.createElement('div');
        place.classList.add('menu__item-conf', 'menu__item-gradient-place');
        place.style.background = gradientValue;
        li.append(conf);
        li.append(place);
        li.innerHTML += `<button class="menu__item-conf menu__item-gradient-btn remove">X</button>`;
        // menuItems.append(li);
        menuItems.insertBefore(li, menuItems.children[0]);
        allGradient.push(allColors);
        localStorage.setItem('allGradient', JSON.stringify(allGradient));
        allFullGradient.push(gradientValue);
        localStorage.setItem('allFullGradient', JSON.stringify(allFullGradient));
    }
};
export default addGradinet;