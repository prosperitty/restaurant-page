import 'bootstrap'
import initialPageLoad from './home'
import loadMenu from './menu'
import loadContact from './contact';

const contentContainer = document.querySelector('#content')
const tabs = document.querySelectorAll('.tabs');

initialPageLoad();

tabs.forEach((e) => {
    e.addEventListener('click', () => {
        removeContent();
        if(e === tabs[1]) {
            loadMenu();
        } else if (e === tabs[0]) {
            initialPageLoad();
        } else if (e === tabs[2]) {
            loadContact();
        }
    });
});

function removeContent() {
    while (contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.firstChild);
      }
}


