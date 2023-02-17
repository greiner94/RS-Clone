import { SHARE } from '../../assets/data/modal-window-data';
import drawModalWindow from '../draw-page/modal-window';

export const tableListener = function (event: MouseEvent) {
    const target = event.target as SVGUseElement;
    const tableBtn = target.closest('.table__btn') as HTMLElement;
    const btnData = tableBtn.dataset.btn;
    switch (btnData) {
        case 'share':
            const url = tableBtn.dataset.url as string;
            drawModalWindow(SHARE, url);
            copyUrl();
            break;
        case 'download':
            break;
        case 'print':
            break;
        case 'delete':
            break;
    }
    console.log('btnData', btnData);
};

function copyUrl(): void {
    const copyBtn = <HTMLElement>document.querySelector('.modal__copy-btn');
    const urlEl = <HTMLElement>document.querySelector('.modal__share-url');
    const url = urlEl.textContent as string;
    copyBtn?.addEventListener('click', () => {
        navigator.clipboard.writeText(url).then(() => {
            copyBtn.textContent = 'done';
            copyBtn.style.background = '#25a53c';
            setTimeout(() => {
                copyBtn.textContent = 'copy';
                copyBtn.removeAttribute('style');
            }, 2000);
        });
    });
}
