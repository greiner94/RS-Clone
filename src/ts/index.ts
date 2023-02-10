import '../assets/scss/style.scss';
import '../pages/index.html';
import { drawMainPage } from './draw-page/draw-main-page';
import qrCode from './qr-code';
import { breadcrumbsHighlight } from './state-element';

drawMainPage();
breadcrumbsHighlight();
qrCode();
