import { SHARE } from '../../assets/data/modal-window-data';
import drawModalWindow from '../draw-page/modal-window';
import domtoimage from 'dom-to-image';

export const tableListener = function (event: MouseEvent) {
    const target = event.target as SVGUseElement;
    const tableBtn = target.closest('.table__btn') as HTMLElement;
    const btnData = tableBtn.dataset.btn;
    const url = tableBtn.dataset.url as string;
    const tableRow = target.closest('.table__row') as HTMLElement;
    const qrWrap = <HTMLElement>tableRow.querySelector('.table__img-block');
    switch (btnData) {
        case 'share':
            drawModalWindow(SHARE, url);
            copyUrl();
            break;
        case 'download':
            download(qrWrap);
            break;
        case 'print':
            print(qrWrap);
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
function download(qrElement: HTMLElement) {
    domtoimage.toPng(qrElement).then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'my-qr-code.png';
        link.href = dataUrl;
        link.click();
    });
}
function print(qrElement: HTMLElement) {
    domtoimage.toPng(qrElement).then((dataUrl) => {
        const a = window.open('', '', 'height=500, width=500');
        if (a) {
            a.document.write('<html>');
            a.document.write(`<img src=${dataUrl}>`);
            a.document.write('</body></html>');
            a.document.close();
            a.print();
        }
    });
}
