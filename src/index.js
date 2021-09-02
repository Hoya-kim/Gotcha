import '@webcomponents/custom-elements';

import './scss/index.scss';
import { Header } from './js/component/header'
import { Footer } from './js/component/footer';
import { commonFunc } from './js/common'
// import { homeFunc } from './js/home'
import { evalFunc } from './js/evaluate'
import { viewFunc } from './js/view'
// import './js/component';

customElements.define("header-component", Header);
customElements.define("footer-component", Footer);

commonFunc();
let path = document.location.pathname
if(path === '/view.html') {
    viewFunc();   
}

if(path === '/evaluate.html') {
    evalFunc();
}