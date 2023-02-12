import { drawMainPage } from '../draw-page/draw-main-page';
import { drawWebsiteTemplatesPage } from '../draw-page/drawWebsiteTemplatesPage';
import infoFromInputs from '../input-hendlers/infoFromInputs';
import getCustomizeQrCode from '../qr-code/getCustomizeQrCode';
import getQrCode from '../qr-code/getQrCode';
import { breadcrumbsHighlight } from '../state-element';
import isValid from '../validation/isValide';

export default function renderNewPage(hash: string) {
    const container = document.querySelector('main') as HTMLElement;
    if (hash === 'main') {
        container.innerHTML = '';
        container.append(drawMainPage());
        breadcrumbsHighlight('main');
    }
    if (hash.includes('templates/')) {
        container.innerHTML = '';
        const page = hash.slice(10);
        console.log(page);
        container.append(drawWebsiteTemplatesPage(page));
        breadcrumbsHighlight(page);
        const form = document.querySelector('.main__content-wrapper') as HTMLFormElement;

        form.addEventListener('input', () => {
            if (isValid()) {
                getQrCode();
            }
        });
    }
    if (hash.includes('customize/')) {
        container.innerHTML = '';
        container.append(drawWebsiteTemplatesPage('customize'));
        breadcrumbsHighlight('customize');
        getCustomizeQrCode();
    }
}
