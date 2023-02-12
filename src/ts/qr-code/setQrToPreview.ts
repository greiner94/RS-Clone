export default function setQrToPreview(imgPath: string, customClass = 'template__preview-qr') {
    const wrapperToQr = document.querySelector('.template__preview-box') as HTMLElement;
    const qrImg = document.createElement('img');

    qrImg.className = customClass;
    qrImg.setAttribute('src', imgPath);
    wrapperToQr.firstElementChild?.replaceWith(qrImg);
}
