export default function email() {
    const emailElem = document.querySelector('#email') as HTMLInputElement;

    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailElem.value)) {
        emailElem.classList.remove('invalid-input');
        return true;
    } else {
        emailElem.classList.add('invalid-input');
        return false;
    }
}
