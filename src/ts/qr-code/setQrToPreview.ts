export default function setQrToPreview(imgPath: string, isLoader = false) {
    const wrapperToQr = document.querySelector('.template__preview-box') as HTMLElement;
    const qrImg = document.createElement('img');
    qrImg.className = isLoader ? 'template__preview-qr template__preview-qr_loader' : 'template__preview-qr';

    if (!isLoader) {
        const qrWrapper = document.createElement('div');
        qrWrapper.className = 'template__preview-qr-wrapper';
        qrImg.setAttribute('src', imgPath);
        qrWrapper.appendChild(qrImg);
        wrapperToQr.firstElementChild?.replaceWith(qrWrapper);
    } else {
        qrImg.setAttribute('src', imgPath);
        wrapperToQr.firstElementChild?.replaceWith(qrImg);
    }
}
