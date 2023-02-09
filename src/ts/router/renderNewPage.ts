import { drawMainPage } from '../draw-page/draw-main-page';
import { drawWebsiteURLPage } from '../draw-page/drawWebsiteURLPage';
import { breadcrumbsHighlight } from '../state-element';

export default function renderNewPage(hash: string) {
    const container = document.querySelector('main') as HTMLElement;
    if (hash === 'main') {
        container.innerHTML = '';
        container.append(drawMainPage());
        breadcrumbsHighlight();
    }
    if (hash.includes('templates/')) {
        container.innerHTML = '';
        container.append(drawWebsiteURLPage());
        breadcrumbsHighlight();
    }
    if (hash.includes('customize/')) {
        container.innerHTML = 'URL сменился на customize';
        // breadcrumbsHighlight();
    }
}
