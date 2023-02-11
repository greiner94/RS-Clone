import { drawMainPage } from '../draw-page/draw-main-page';
import { drawWebsiteTemplatesPage } from '../draw-page/drawWebsiteTemplatesPage';
import infoFromInputs from '../input-hendlers/infoFromInputs';
import { breadcrumbsHighlight } from '../state-element';
import { hideBlockInput } from '../state-element';

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
        document.body.addEventListener('click', (e) => {
            const target = <HTMLElement>e.target;
            if (target.classList.contains('btn-next')) {
                // Пока сделала вызов функции из страницы с полями ввода инфы, эта функция должна находить значения инпутов
                // infoFromInputs();
                infoFromInputs();
            }
            if (target.classList.contains('hide-block__arrow')) {
                hideBlockInput();
            }
            // }
        });
    }
    if (hash.includes('customize/')) {
        //container.innerHTML = 'URL сменился на customize тут должна быть 3 страница';
        // breadcrumbsHighlight();
        container.innerHTML = '';
        container.append(drawWebsiteTemplatesPage('customize'));
    }
}
