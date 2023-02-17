import getQrParams from './getQrParams';
import getUserID from './getUserID';
import setQrToPreview from './setQrToPreview';
import preloader from '../../assets/images/smartphone/preloader.gif';
import getQrStyles from './getQrStyles';

export default function getQrCode() {
    return new Promise((resolve, reject) => {
        if (localStorage.getItem('fetching')) {
            return;
        }

        localStorage.setItem('fetching', 'true');
        setQrToPreview(preloader, true);

        const nextPrevBtns = document.querySelectorAll('.btn') as NodeListOf<HTMLElement>;
        nextPrevBtns.forEach((btn) => btn.setAttribute('disabled', 'true'));

        setTimeout(() => {
            fetch(`https://qr-api-vks7.onrender.com/api/qr/${getUserID()}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...getQrParams(),
                    ...getQrStyles(),
                }),
            })
                .then((res) => res.json())
                .then((res) => {
                    setQrToPreview(res.fileName);
                    localStorage.setItem('qrPath', res.fileName);
                    localStorage.setItem('qrBody', JSON.stringify(getQrParams()));
                    localStorage.removeItem('fetching');
                    nextPrevBtns.forEach((btn) => btn.removeAttribute('disabled'));
                    resolve('success!');
                })
                .catch((err) => reject(err));
        }, 5000);
    });
}
