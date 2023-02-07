import { drawMainPage } from '../draw-page/draw-main-page';
import { breadcrumbsHighlight } from '../state-element';

export default function renderNewPage(idPage: string) {
    const container = document.querySelector('main') as HTMLElement;
    container.innerHTML = '';

    if (idPage === 'main') {
        container.append(drawMainPage());
        breadcrumbsHighlight();
    }
}
