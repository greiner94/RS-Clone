import { getLSParams } from './local-storage/get-params';
import { addLSParams } from './local-storage/add-params';

export function breadcrumbsHighlight(): void {
    const arrBreadcrumbsItems: NodeListOf<HTMLElement> = document.querySelectorAll('.breadcrumbs__item');
    const stage = <number>getLSParams('stage') || 1;
    addLSParams('stage', stage);
    arrBreadcrumbsItems[stage - 1].classList.add('active');
}
