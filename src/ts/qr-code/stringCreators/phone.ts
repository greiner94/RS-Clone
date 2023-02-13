export default function phone() {
    const phoneElem = document.querySelector('#yournumber') as HTMLInputElement;

    return 'tel:' + phoneElem.value;
}
