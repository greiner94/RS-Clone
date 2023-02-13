import getQrParams from './getQrParams';
import getUserID from './getUserID';
import setQrToPreview from './setQrToPreview';
import preloader from '../../assets/images/smartphone/preloader.gif';

export default function getQrCode() {
    if (localStorage.getItem('fetching')) {
        return;
    }

    localStorage.setItem('fetching', 'true');
    setQrToPreview(preloader, 'template__preview-qr template__preview-qr_loader');

    setTimeout(() => {
        console.log(getQrParams());
        fetch(`https://qr-api-vks7.onrender.com/api/qr/${getUserID()}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(getQrParams()),
        })
            .then((res) => res.json())
            .then((res) => {
                setQrToPreview(res.fileName);
                localStorage.setItem('qrPath', res.fileName);
                localStorage.setItem('qrBody', JSON.stringify(getQrParams()));
            });

        localStorage.removeItem('fetching');
    }, 5000);
}
