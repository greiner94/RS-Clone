export default function phone() {
    const phoneElem = document.querySelector('#yournumber') as HTMLInputElement;

    if (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phoneElem.value) && phoneElem.value) {
        phoneElem.classList.remove('invalid-input');
        return true;
    } else {
        phoneElem.classList.add('invalid-input');
        return false;
    }
}
