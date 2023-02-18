import getHtmlOfHeader from '../getHtmlOfHeader';
import getHtmlOfFooter from '../getHtmlOfFooter';
import getUserQrCodeData from '../qr-code/getUserQrCodes';
import { QrCodeData } from '../type/type';
import { tableListener, searchQr } from '../listeners/user-page-listener';

export function drawUserPage(): DocumentFragment {
    const fragmentUserPage = <DocumentFragment>document.createDocumentFragment();
    const headerBlock = <HTMLElement>document.createElement('header');
    const mainBlock = <HTMLElement>document.createElement('main');
    const footerBlock = <HTMLElement>document.createElement('footer');
    headerBlock.className = 'header';
    footerBlock.className = 'footer';
    mainBlock.className = 'main user-main';
    headerBlock.innerHTML = getHtmlOfHeader();
    footerBlock.innerHTML = getHtmlOfFooter();
    mainBlock.append(getMainBlock());
    fragmentUserPage.append(headerBlock, mainBlock, footerBlock);
    return fragmentUserPage;
}

function getMainBlock(): DocumentFragment {
    const fragmentMainBlock = <DocumentFragment>document.createDocumentFragment();
    const h2 = <HTMLElement>document.createElement('h2');
    const contentWrap = <HTMLElement>document.createElement('div');
    const searchBtnLine = <HTMLElement>document.createElement('div');
    const searchWrap = <HTMLElement>document.createElement('div');
    const searchInput = <HTMLInputElement>document.createElement('input');
    const btnAnchor = <HTMLAnchorElement>document.createElement('a');
    const btn = <HTMLElement>document.createElement('button');
    const tableWrap = <HTMLElement>document.createElement('div');
    const tableHeaderLine = <HTMLElement>document.createElement('div');
    const tableContent = <HTMLElement>document.createElement('div');

    h2.className = 'main__h2';
    h2.textContent = 'Your QR cods';
    searchInput.placeholder = 'Search by QR code name';
    searchInput.className = 'input main__search';
    btnAnchor.href = '#main';
    btn.textContent = 'Create QR code';
    btn.className = 'btn create-btn';
    contentWrap.className = 'main__user-content-wrap';
    searchBtnLine.className = 'main__search-btn-wrap';
    searchWrap.className = 'main__search-wrap';
    tableWrap.className = 'main__table table';
    tableHeaderLine.className = 'table__header-row';
    tableContent.className = 'table__content';
    tableWrap.addEventListener('click', tableListener);
    searchInput.addEventListener('input', searchQr);
    tableHeaderLine.innerHTML = getTableHeaderElement();
    btnAnchor.append(btn);
    searchWrap.append(searchInput);
    searchBtnLine.append(searchWrap, btnAnchor);
    tableWrap.append(tableHeaderLine, tableContent);
    contentWrap.append(searchBtnLine, tableWrap);
    fragmentMainBlock.append(h2, contentWrap);
    return fragmentMainBlock;
}

function getTableHeaderElement(): string {
    const headerElement = [
        `<span class="all-choose table__choose">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <symbol id="btn-check">
            <rect x="0.5" y="0.5" width="29" height="29" rx="9.5" fill="var(--check-mark-bg, #ffffff)" stroke="#C1C1C1"/>
            <path d="M8 15.2377L12.6026 20.192L23 9" stroke="var(--check-mark, #ffffff)" stroke-width="3" stroke-linecap="round"/>
            </symbol>
                <svg class="btn-check-svg-colors">
                <use  xlink:href="#btn-check" />
                </svg>
            </svg>
        </span>`,
        '<span class="table__header-element">Select all</span>',
        `<div class="qr-name-wrap"><span class="table__header-element qr-name" data-az="za" >QR code name</span>
        <span class="sort-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <symbol id="btn-sort1">
                    <path d="M11.8079 18.7695L8.09346 14.3121C7.65924 13.7911 8.02976 13 8.70803 13L15.292 13C15.9702 13 16.3408 13.7911 15.9065 14.3121L12.1921 18.7695C12.0921 18.8895 11.9079 18.8895 11.8079 18.7695Z" fill="var(--color-up, #B6C4D8)"></path>
                    <path d="M12.1921 5.23047L15.9065 9.68785C16.3408 10.2089 15.9702 11 15.292 11L8.70803 11C8.02976 11 7.65924 10.2089 8.09346 9.68785L11.8079 5.23047C11.9079 5.11053 12.0921 5.11053 12.1921 5.23047Z" fill="var(--color-down, #B6C4D8)"></path>
                </symbol> 
                <svg class="btn-svg-sort-colors">
                    <use xlink:href="#btn-sort1" />
                </svg>
            </svg>
        </span>
        </div>`,
        `<div class="qr-type-wrap"><span class="table__header-element qr-type" data-az="za">QR code type</span>
        <span class="sort-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <symbol id="btn-sort2">
                    <path d="M11.8079 18.7695L8.09346 14.3121C7.65924 13.7911 8.02976 13 8.70803 13L15.292 13C15.9702 13 16.3408 13.7911 15.9065 14.3121L12.1921 18.7695C12.0921 18.8895 11.9079 18.8895 11.8079 18.7695Z" fill="var(--color-up, #B6C4D8)"></path>
                    <path d="M12.1921 5.23047L15.9065 9.68785C16.3408 10.2089 15.9702 11 15.292 11L8.70803 11C8.02976 11 7.65924 10.2089 8.09346 9.68785L11.8079 5.23047C11.9079 5.11053 12.0921 5.11053 12.1921 5.23047Z" fill="var(--color-down, #B6C4D8)"></path>
                </symbol> 
                    <svg class="btn-svg-sort-colors">
                    <use  xlink:href="#btn-sort2" />
                </svg>
            </svg>
        </span>
        </div>`,
        '<span class="table__header-element insert-btn"><button class="table__header-del-btn" disabled>Delete Selected</span>',
    ];
    return headerElement.join('');
}

export async function getTableContent(sortBy = '', odered = 'az'): Promise<void> {
    const tableContentWrap = <HTMLElement>document.querySelector('.table__content');
    tableContentWrap.innerHTML = '';
    const fragmentTableContent = <DocumentFragment>document.createDocumentFragment();
    try {
        const userData: QrCodeData[] = await getUserQrCodeData();
        if (sortBy === 'name') {
            if (odered === 'az') {
                userData.sort((a, b) => {
                    const nameA = a.descr.toLowerCase() as string;
                    const nameB = b.descr.toLowerCase() as string;
                    return nameA < nameB ? -1 : 1;
                });
            } else {
                userData.sort((a, b) => {
                    const nameA = a.descr.toLowerCase() as string;
                    const nameB = b.descr.toLowerCase() as string;
                    return nameA > nameB ? -1 : 1;
                });
            }
        }
        if (sortBy === 'type') {
            if (odered === 'az') {
                userData.sort((a, b) => {
                    const typeA = a.type.toLowerCase() as string;
                    const typeB = b.type.toLowerCase() as string;
                    return typeA < typeB ? -1 : 1;
                });
            } else {
                userData.sort((a, b) => {
                    const typeA = a.type.toLowerCase() as string;
                    const typeB = b.type.toLowerCase() as string;
                    return typeA > typeB ? -1 : 1;
                });
            }
        }
        userData.forEach(({ type, descr, fileName, id }, ind) => {
            const row = <HTMLElement>document.createElement('div');
            const spanChoose = <HTMLElement>document.createElement('span');
            const spanQrImg = <HTMLElement>document.createElement('span');
            const spanQrName = <HTMLElement>document.createElement('span');
            const spanQrType = <HTMLElement>document.createElement('span');
            const divBtns = <HTMLElement>document.createElement('div');
            row.className = 'table__row';
            spanChoose.className = 'table__choose single-shoose';
            spanChoose.dataset.id = `${id}`;
            spanQrImg.className = 'table__img-block';
            spanQrName.className = 'table__qr-name';
            spanQrType.className = 'table__qr-type';
            divBtns.className = 'table__btns';
            spanChoose.innerHTML = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <symbol id="btn-check${ind + 1}">
            <rect x="0.5" y="0.5" width="29" height="29" rx="9.5" fill="var(--check-mark-bg, #ffffff)" stroke="#C1C1C1"/>
            <path d="M8 15.2377L12.6026 20.192L23 9" stroke="var(--check-mark, #ffffff)" stroke-width="3" stroke-linecap="round"/>
            </symbol>
                <svg class="btn-check-svg-colors">
                <use  xlink:href="#btn-check${ind + 1}" />
                </svg>
            </svg>`;
            spanQrImg.innerHTML = `<img src=${fileName} class="table__qr-img">`;
            spanQrName.textContent = descr;
            spanQrType.textContent = type;
            divBtns.innerHTML = `
                <div class="table-btn__share table__btn" data-btn="share" data-url="${fileName}">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <symbol id="btn-share${ind + 1}">
                    <g clip-path="url(#clip0_205_3175)">
                        <path d="M13.75 8.75C15.8203 8.75 17.5 7.07031 17.5 5C17.5 2.92969 15.8203 1.25 13.75 1.25C11.6797 1.25 10 2.92969 10 5C10 5.15625 10.0078 5.3125 10.0273 5.46484L6.35156 7.30078C5.67969 6.64844 4.76172 6.25 3.75 6.25C1.67969 6.25 0 7.92969 0 10C0 12.0703 1.67969 13.75 3.75 13.75C4.76172 13.75 5.67969 13.3516 6.35156 12.6992L10.0273 14.5352C10.0078 14.6875 10 14.8398 10 15C10 17.0703 11.6797 18.75 13.75 18.75C15.8203 18.75 17.5 17.0703 17.5 15C17.5 12.9297 15.8203 11.25 13.75 11.25C12.7383 11.25 11.8203 11.6484 11.1484 12.3008L7.47266 10.4648C7.49219 10.3125 7.5 10.1602 7.5 10C7.5 9.83984 7.49219 9.6875 7.47266 9.53516L11.1484 7.69922C11.8203 8.35156 12.7383 8.75 13.75 8.75Z" fill="var(--color-hover, #47abd7)"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_205_3175">
                            <rect width="17.5" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                    </symbol>
                        <svg class="table-btn-svg-colors">
                        <use  xlink:href="#btn-share${ind + 1}" />
                        </svg>
                    </svg>
                </div>
                <div class="table-btn__download table__btn" data-btn="download" data-url="${fileName}">
                <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <symbol id="btn-download${ind + 1}">
                    <path d="M7.61719 15.3118C8.10547 15.7411 8.89844 15.7411 9.38672 15.3118L15.6367 9.81731C16.125 9.38805 16.125 8.69093 15.6367 8.26167C15.1484 7.83242 14.3555 7.83242 13.8672 8.26167L9.75 11.8846V1.3489C9.75 0.741071 9.19141 0.25 8.5 0.25C7.80859 0.25 7.25 0.741071 7.25 1.3489V11.8812L3.13281 8.26511C2.64453 7.83585 1.85156 7.83585 1.36328 8.26511C0.875 8.69437 0.875 9.39148 1.36328 9.82074L7.61328 15.3152L7.61719 15.3118Z" fill="var(--color-hover, #47abd7)"/>
                    <line x1="1.5" y1="18.75" x2="16.5" y2="18.75" stroke="var(--color-hover, #47abd7)" stroke-width="3" stroke-linecap="round"/>
                </symbol>
                <svg class="table-btn-svg-colors">
                    <use  xlink:href="#btn-download${ind + 1}" />
                </svg>
                </svg>
                </div>
                <div class="table-btn__print table__btn" data-btn="print">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <symbol id="btn-print${ind + 1}">
                    <g clip-path="url(#clip0_204_3173)">
                        <path d="M5 0C3.62109 0 2.5 1.12109 2.5 2.5V6.25H5V2.5H13.8555L15 3.64453V6.25H17.5V3.64453C17.5 2.98047 17.2383 2.34375 16.7695 1.875L15.625 0.730469C15.1562 0.261719 14.5195 0 13.8555 0H5ZM15 13.75V15V17.5H5V15V14.375V13.75H15ZM17.5 15H18.75C19.4414 15 20 14.4414 20 13.75V10C20 8.62109 18.8789 7.5 17.5 7.5H2.5C1.12109 7.5 0 8.62109 0 10V13.75C0 14.4414 0.558594 15 1.25 15H2.5V17.5C2.5 18.8789 3.62109 20 5 20H15C16.3789 20 17.5 18.8789 17.5 17.5V15ZM16.875 9.6875C17.1236 9.6875 17.3621 9.78627 17.5379 9.96209C17.7137 10.1379 17.8125 10.3764 17.8125 10.625C17.8125 10.8736 17.7137 11.1121 17.5379 11.2879C17.3621 11.4637 17.1236 11.5625 16.875 11.5625C16.6264 11.5625 16.3879 11.4637 16.2121 11.2879C16.0363 11.1121 15.9375 10.8736 15.9375 10.625C15.9375 10.3764 16.0363 10.1379 16.2121 9.96209C16.3879 9.78627 16.6264 9.6875 16.875 9.6875Z" fill="var(--color-hover, #47abd7)"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_204_3173">
                            <rect width="20" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </symbol>
                <svg class="table-btn-svg-colors">
                    <use  xlink:href="#btn-print${ind + 1}" />
                </svg>
                </svg>
                </div>
                <div class="table-btn__delete  table__btn" data-btn="delete" data-id=${id}>
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <symbol id="btn-delete${ind + 1}">
                    <g clip-path="url(#clip0_204_3171)">
                        <path d="M5.28125 0.691406C5.49219 0.265625 5.92578 0 6.39844 0H11.1016C11.5742 0 12.0078 0.265625 12.2187 0.691406L12.5 1.25H16.25C16.9414 1.25 17.5 1.80859 17.5 2.5C17.5 3.19141 16.9414 3.75 16.25 3.75H1.25C0.558594 3.75 0 3.19141 0 2.5C0 1.80859 0.558594 1.25 1.25 1.25H5L5.28125 0.691406ZM1.25 5H16.25V17.5C16.25 18.8789 15.1289 20 13.75 20H3.75C2.37109 20 1.25 18.8789 1.25 17.5V5ZM5 7.5C4.65625 7.5 4.375 7.78125 4.375 8.125V16.875C4.375 17.2188 4.65625 17.5 5 17.5C5.34375 17.5 5.625 17.2188 5.625 16.875V8.125C5.625 7.78125 5.34375 7.5 5 7.5ZM8.75 7.5C8.40625 7.5 8.125 7.78125 8.125 8.125V16.875C8.125 17.2188 8.40625 17.5 8.75 17.5C9.09375 17.5 9.375 17.2188 9.375 16.875V8.125C9.375 7.78125 9.09375 7.5 8.75 7.5ZM12.5 7.5C12.1562 7.5 11.875 7.78125 11.875 8.125V16.875C11.875 17.2188 12.1562 17.5 12.5 17.5C12.8438 17.5 13.125 17.2188 13.125 16.875V8.125C13.125 7.78125 12.8438 7.5 12.5 7.5Z" fill="var(--color-hover, #47abd7)"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_204_3171">
                        <rect width="17.5" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                </symbol>
                <svg class="table-btn-svg-colors">
                    <use  xlink:href="#btn-delete${ind + 1}" />
                </svg>    
                </svg>
                </div>`;
            row.append(spanChoose, spanQrImg, spanQrName, spanQrType, divBtns);
            fragmentTableContent.append(row);
        });
    } catch {
        if (!document.querySelector('.empty-table')) {
            const div = <HTMLElement>document.createElement('div');
            const p = <HTMLElement>document.createElement('p');
            div.className = 'empty-table';
            p.textContent = `You don't have any QR code. Click Create QR code`;
            div.append(p);
            fragmentTableContent.append(div);
        }
    }
    tableContentWrap.append(fragmentTableContent);
}
