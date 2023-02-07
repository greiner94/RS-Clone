import { drawMainPage } from '../draw-page/draw-main-page';
import { drawWebsiteURLPage } from '../draw-page/drawWebsiteURLPage';
import { breadcrumbsHighlight } from '../state-element';

export default function renderNewPage(idPage: string) {
    const container = document.querySelector('main') as HTMLElement;
    if (idPage === 'main') {
        container.innerHTML = '';
        container.append(drawMainPage());
        breadcrumbsHighlight();
    }
    if (idPage === 'WebsiteURL') {
        container.innerHTML = '';
        container.append(drawWebsiteURLPage());
        breadcrumbsHighlight();
    }
}
