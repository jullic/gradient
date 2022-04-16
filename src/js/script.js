import burger from './modules/burger';
import colorConfig from './modules/colorConfig';
import {gradient} from './modules/gradient';
import addGradinet from './modules/addGradinet';
import gallery from './modules/gallery';



window.addEventListener('DOMContentLoaded', () => {
    burger('.burger', '.menu');
    colorConfig('.gradient__count-btn', '.gradient__config');
    gradient('input');
    addGradinet();
    gallery();
});
