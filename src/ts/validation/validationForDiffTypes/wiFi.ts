export default function wiFi() {
    const networkName = document.querySelector('#networkname') as HTMLInputElement;

    if (networkName.value) {
        networkName.classList.remove('invalid-input');
        return true;
    } else {
        networkName.classList.add('invalid-input');
        return false;
    }
}
