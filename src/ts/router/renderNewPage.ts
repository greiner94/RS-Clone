import { drawMainPage } from '../draw-page/draw-main-page';
import { drawWebsiteURLPage } from '../draw-page/drawWebsiteURLPage';
import infoFromInputs from '../input-hendlers/infoFromInputs';
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
        document.body.addEventListener('click', (e) => {
            if ((e.target as HTMLElement).classList.contains('btn-next')) {
                // Пока сделала вызов функции из страницы с полями ввода инфы, эта функция должна находить значения инпутов
                // infoFromInputs();
                infoFromInputs();
            }
        });
    }
    if (hash.includes('customize/')) {
        container.innerHTML = 'URL сменился на customize тут должна быть 3 страница';
        // breadcrumbsHighlight();
    }
}
