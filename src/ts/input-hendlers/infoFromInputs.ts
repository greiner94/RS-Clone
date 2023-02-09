export default function infoFromInputs() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const url = (document.getElementById('url') as HTMLInputElement).value;

    if (!name || !url) {
        return;
    }
    console.log(name);
    console.log(url);
}
