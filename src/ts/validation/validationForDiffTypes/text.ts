export default function text() {
    const textElem = document.querySelector('#text') as HTMLTextAreaElement;

    if (textElem.value) {
        textElem.classList.remove('invalid-input');
        return true;
    } else {
        textElem.classList.add('invalid-input');
        return false;
    }
}
