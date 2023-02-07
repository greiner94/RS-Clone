import '../assets/scss/style.scss';
import '../pages/index.html';
import getHtmlOfFooter from './getHtmlOfFooter';
import getHtmlOfHeader from './getHtmlOfHeader';
// import { drawMainPage } from './draw-page/draw-main-page';
// import { breadcrumbsHighlight } from './state-element';
import routeChange from './router/routChange';
window.location.hash = '';
document.querySelector('header')?.insertAdjacentHTML('afterbegin', getHtmlOfHeader());
document.querySelector('footer')?.insertAdjacentHTML('beforeend', getHtmlOfFooter());

routeChange();
