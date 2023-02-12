export default function url() {
    const urlElement = document.querySelector('#websiteurl') as HTMLInputElement;
    const urlValue = urlElement.value;
    return urlValue;
}
