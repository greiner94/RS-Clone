export default function isQrHasName() {
    const codeNameElem = document.querySelector('#nameyourqrcode') as HTMLInputElement;
    if (codeNameElem.value) {
        codeNameElem.classList.remove('invalid-input');
        return true;
    } else {
        codeNameElem.classList.add('invalid-input');
        return false;
    }
}
