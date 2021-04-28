import 'bootstrap'
import initialPageLoad from './home'

const homeTab = document.querySelector('#home-tab');
const menuTab = document.querySelector('#menu-tab');
const contactTab = document.querySelector('#contact-tab');
const tabs = document.querySelectorAll('.tabs');

initialPageLoad();

tabs.forEach((e,i) => {
    e.addEventListener('click', (el) => {
        console.log(el);
    });
});




