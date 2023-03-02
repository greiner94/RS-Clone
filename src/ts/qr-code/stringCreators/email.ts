export default function email() {
    const emailElem = document.querySelector('#email') as HTMLInputElement;

    return `mailto:${emailElem.value}`;
}
