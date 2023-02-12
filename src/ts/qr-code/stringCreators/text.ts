export default function text() {
    const urlElement = document.querySelector('#text') as HTMLTextAreaElement;
    return urlElement.value;
}
