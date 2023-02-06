import '../assets/scss/style.scss';
import '../pages/index.html';
import getHtmlOfFooter from './getHtmlOfFooter';
import getHtmlOfHeader from './getHtmlOfHeader';

document.querySelector('body')?.insertAdjacentHTML('afterbegin', getHtmlOfHeader());
document.querySelector('body')?.insertAdjacentHTML('beforeend', getHtmlOfFooter());
