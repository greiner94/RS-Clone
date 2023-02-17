import customizePage from '../customizePage';
import { drawMainPage } from '../draw-page/draw-main-page';
import { drawWebsiteTemplatesPage } from '../draw-page/drawWebsiteTemplatesPage';
import addListenersForLinks from '../listeners/addListenersForLinks';
import getQrCode from '../qr-code/getQrCode';
import { breadcrumbsHighlight } from '../state-element';
import isValid from '../validation/isValide';
import { drawUserPage, getTableContent } from '../draw-page/draw-user-page';
import { tableListener } from '../listeners/user-page-listener';

export default function renderNewPage(hash: string) {
    const container = document.querySelector('main') as HTMLElement;
    console.log('hash', hash);
    if (hash === 'main') {
        container.innerHTML = '';
        container.append(drawMainPage());
        breadcrumbsHighlight('main');
        addListenersForLinks();
    }
    if (hash.includes('templates/')) {
        container.innerHTML = '';
        const page = hash.slice(10);
        container.append(drawWebsiteTemplatesPage(page));
        breadcrumbsHighlight(page);

        localStorage.removeItem('fetching');
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
        customizePage();
    }
    if (hash.includes('yourQR')) {
        document.body.innerHTML = '';
        document.body.append(drawUserPage());
        getTableContent();
    }
}
