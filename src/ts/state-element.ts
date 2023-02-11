import { StagePage } from './type/type';

const Stage: StagePage = {
    main: 1,
    WebsiteURL: 2,
    'Wi-Fi': 2,
    vCard: 2,
    SimpleText: 2,
    Email: 2,
    SMS: 2,
    Calendar: 2,
    Geolocation: 2,
    PhoneNumber: 2,
    customize: 3,
};

export function breadcrumbsHighlight(page: string): void {
    const arrBreadcrumbsItems: NodeListOf<HTMLElement> = document.querySelectorAll('.breadcrumbs__item');
    Array.from(arrBreadcrumbsItems).forEach((el) => {
        el.classList.remove('active');
    });
    const stage = Stage[page];
    arrBreadcrumbsItems[stage - 1].classList.add('active');
}

export function hideBlockInput(block: HTMLElement): void {
    const blockToHide = block.querySelector('.input-bigblock-wrapper');
    const blockHeader = block.querySelector('.hide-block');
    blockToHide?.classList.toggle('none');
    blockHeader?.classList.toggle('hide');
}
