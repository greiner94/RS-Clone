import { SHARE } from '../../assets/data/modal-window-data';
import drawModalWindow from '../draw-page/modal-window';
import domtoimage from 'dom-to-image';
import { deleteArrQrCodeData, deleteUserQrCodeData } from '../qr-code/deleteQrCode';
import { getTableContent } from '../draw-page/draw-user-page';

export const tableListener = function (event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.closest('.table__btn')) {
        const tableBtn = target.closest('.table__btn') as HTMLElement;
        const btnData = tableBtn.dataset.btn;
        const url = tableBtn.dataset.url as string;
        switch (btnData) {
            case 'share':
                drawModalWindow(SHARE, url);
                copyUrl();
                break;
            case 'download':
                download(target);
                break;
            case 'print':
                print(target);
                break;
            case 'delete':
                const qrId = Number(tableBtn.dataset.id) as number;
                deleteQr(qrId);
                break;
        }
    }
    if (target.closest('.table__choose')) {
        const checkSquare = target.closest('.table__choose') as HTMLElement;
        const allChooseEl = <HTMLElement>document.querySelector('.all-choose');
        const headerDeleteBtn = <HTMLElement>document.querySelector('.table__header-del-btn');
        const allChecker = <NodeListOf<HTMLElement>>document.querySelectorAll('.table__choose');
        const allSingleChecker = <NodeListOf<HTMLElement>>document.querySelectorAll('.single-shoose');
        if (checkSquare === allChooseEl && allSingleChecker.length > 0) {
            if (checkSquare.classList.contains('active')) {
                [...allChecker].forEach((el) => {
                    el.classList.remove('active');
                });
            } else {
                [...allChecker].forEach((el) => {
                    el.classList.add('active');
                });
            }
        } else if (allSingleChecker.length > 0) {
            checkSquare.classList.toggle('active');
            if (!checkSquare.classList.contains('active')) {
                allChooseEl?.classList.remove('active');
            }
        }
        if ([...allChecker].find((el) => el.classList.contains('active'))) {
            headerDeleteBtn.removeAttribute('disabled');
        } else {
            headerDeleteBtn.setAttribute('disabled', 'true');
        }
    }
    if (
        target.classList.contains('table__header-del-btn') &&
        !document.querySelector('.table__header-del-btn')?.hasAttribute('disabled')
    ) {
        const allChecker = <NodeListOf<HTMLElement>>document.querySelectorAll('.single-shoose');
        const allChooseEl = <HTMLElement>document.querySelector('.all-choose');
        const headerDeleteBtn = <HTMLElement>document.querySelector('.table__header-del-btn');
        const idArr = [...allChecker].map((el) => {
            if (el.classList.contains('active')) {
                return Number(el.dataset.id);
            }
        });
        deleteSomeQr(idArr as number[]);
        allChooseEl.classList.remove('active');
        headerDeleteBtn.setAttribute('disabled', 'true');
    }
    const qrNames = document.querySelectorAll('.table__qr-name');
    if (target.closest('.qr-name-wrap') && qrNames.length > 0) {
        const qrNameWrap = <HTMLElement>target.closest('.qr-name-wrap');
        const qrNamesHeader = <HTMLElement>qrNameWrap.querySelector('.qr-name');
        const arrowType = <HTMLElement>document.querySelector('.qr-type-wrap .sort-arrow');
        const arrow = <HTMLElement>qrNameWrap.querySelector('.sort-arrow');
        arrowType.classList.remove('down', 'up');
        let odered;
        if (qrNamesHeader.dataset.az === 'az') {
            qrNamesHeader.dataset.az = odered = 'za';
            arrow.classList.add('down');
            arrow.classList.remove('up');
        } else {
            qrNamesHeader.dataset.az = odered = 'az';
            arrow.classList.add('up');
            arrow.classList.remove('down');
        }
        getTableContent('name', odered);
    }
    if (target.closest('.qr-type-wrap') && qrNames.length > 0) {
        const qrTypeWrap = <HTMLElement>target.closest('.qr-type-wrap');
        const qrTypeHeader = <HTMLElement>qrTypeWrap.querySelector('.qr-type');
        const arrowName = <HTMLElement>document.querySelector('.qr-name-wrap .sort-arrow');
        const arrow = <HTMLElement>qrTypeWrap.querySelector('.sort-arrow');
        arrowName.classList.remove('down', 'up');
        let odered;
        if (qrTypeHeader.dataset.az === 'az') {
            qrTypeHeader.dataset.az = odered = 'za';
            arrow.classList.add('down');
            arrow.classList.remove('up');
        } else {
            qrTypeHeader.dataset.az = odered = 'az';
            arrow.classList.add('up');
            arrow.classList.remove('down');
        }
        getTableContent('type', odered);
    }
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
function download(target: HTMLElement) {
    const imgEl = getQRCodeHideImg(target);
    domtoimage.toPng(imgEl).then((dataUrl) => {
        console.log('dataUrl', dataUrl);
        const link = document.createElement('a');
        link.download = 'my-qr-code.png';
        link.href = dataUrl;
        link.click();
    });
}

function getQRCodeHideImg(target: HTMLElement): HTMLImageElement {
    const tableRow = target.closest('.table__row') as HTMLElement;
    const img = <HTMLImageElement>tableRow.querySelector('.table__hide-img');
    return img;
}

function print(target: HTMLElement) {
    const imgEl = getQRCodeHideImg(target);
    console.log(imgEl);
    domtoimage
        .toPng(imgEl)
        .then((dataUrl) => {
            console.log('dataUrl', dataUrl);
            const a = window.open('', '', 'height=500, width=500');
            if (a) {
                a.document.write('<html>');
                a.document.write(`<img src=${dataUrl}>`);
                a.document.write('</body></html>');
                a.document.close();
                a.print();
            }
            console.log('print');
        })
        // .then(() => {
        //     console.log('Delete img');
        //     clearQRCodeHideImg('print');
        // })
        .catch();
}
async function deleteQr(qrId: number) {
    try {
        await deleteUserQrCodeData(qrId);
        await getTableContent();
    } catch {}
}

async function deleteSomeQr(idArr: number[]) {
    try {
        await deleteArrQrCodeData(idArr);
    } catch {}
}

export function searchQr() {
    const searchInput = <HTMLInputElement>document.querySelector('.main__search');
    const nameEls = <NodeListOf<HTMLElement>>document.querySelectorAll('.table__qr-name');
    const tableRows = <NodeListOf<HTMLElement>>document.querySelectorAll('.table__row');
    const nameArr = [...nameEls];
    nameArr.forEach((el, ind) => {
        if (!el.textContent?.includes(searchInput.value)) {
            tableRows[ind].classList.add('hide');
        } else {
            tableRows[ind].classList.remove('hide');
        }
    });
}
