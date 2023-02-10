import getQrParams from './getQrParams';
import getUserID from './getUserID';

export default function getQrCode() {
    fetch(`https://qr-api-vks7.onrender.com/api/qr/${getUserID()}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(getQrParams),
    })
        .then((res) => res.json())
        .then((res) => console.log(res));
}
