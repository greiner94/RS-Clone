export default function wiFi() {
    const networkname = (document.querySelector('#networkname') as HTMLInputElement).value;
    const password = (document.querySelector('#password') as HTMLInputElement).value;
    const select = (document.querySelector('.select') as HTMLSelectElement).value;
    const hiddennetwork = (document.querySelector('#hiddennetwork') as HTMLInputElement).checked;

    const passwordValue = password ? `;P:${password}` : '';
    const hiddennetworkValue = hiddennetwork ? ';H:true' : '';
    let selectValue;
    switch (select) {
        case 'WEP': {
            selectValue = ';T:WEP';
            break;
        }
        case 'WPA/WPA2': {
            selectValue = ';T:WPA';
            break;
        }
        default:
            selectValue = '';
            break;
    }
    return `WIFI:S:${networkname}${selectValue}${passwordValue}${hiddennetworkValue};;`;
}
