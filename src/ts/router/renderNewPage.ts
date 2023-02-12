import { drawMainPage } from '../draw-page/draw-main-page';
import { drawWebsiteTemplatesPage } from '../draw-page/drawWebsiteTemplatesPage';
import infoFromInputs from '../input-hendlers/infoFromInputs';
import getQrCode from '../qr-code';
import { breadcrumbsHighlight } from '../state-element';
import isValid from '../validation/isValide';

export default function renderNewPage(hash: string) {
    const container = document.querySelector('main') as HTMLElement;
    if (hash === 'main') {
        container.innerHTML = '';
        container.append(drawMainPage());
        breadcrumbsHighlight();
    }
    if (hash.includes('templates/')) {
        container.innerHTML = '';
        console.log(hash.slice(10));
        container.append(drawWebsiteTemplatesPage(hash.slice(10)));
        //breadcrumbsHighlight();
        const form = document.querySelector('.input-block') as HTMLFormElement;

        form.addEventListener('input', () => {
            if (isValid()) {
                getQrCode();
            }
        });
    }
    if (hash.includes('customize/')) {
        //container.innerHTML = 'URL сменился на customize тут должна быть 3 страница';
        // breadcrumbsHighlight();
        container.innerHTML = '';
        container.append(drawWebsiteTemplatesPage('customize'));
    }
}
