export default function url() {
    const urlElement = document.querySelector('#websiteurl') as HTMLInputElement;
    if (
        /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
            urlElement.value
        )
    ) {
        urlElement.classList.remove('invalid-input');
        return true;
    } else {
        urlElement.classList.add('invalid-input');
        return false;
    }
}
