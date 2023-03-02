import domtoimage from 'dom-to-image';
import getUserID from '../qr-code/getUserID';

export default function save() {
    const saveBtn = document.querySelector('.btn-save') as HTMLElement;
    saveBtn.removeAttribute('disabled');
    saveBtn.addEventListener('click', () => {
        if (saveBtn.getAttribute('disabled')) return;
        saveBtn.setAttribute('disabled', 'true');
        const smatphoneDisplayState =
            (document.querySelector('.smartphone') as HTMLElement).style.display == 'block' ? 'block' : '';
        (document.querySelector('.smartphone') as HTMLElement).style.display = 'block';

        const qrElement = document.querySelector('.template__preview-qr-wrapper') as HTMLElement;
        const { type, descr } = JSON.parse(localStorage.getItem('qrBody') || '');
        domtoimage.toPng(qrElement).then((dataUrl) => {
            (document.querySelector('.smartphone') as HTMLElement).style.display = smatphoneDisplayState;

            fetch(`https://qr-api-vks7.onrender.com/api/qr/ready/${getUserID()}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    dataUrl,
                    type,
                    descr,
                }),
            })
                .then((res) => {
                    if (res.ok) {
                        saveBtn.textContent = 'Saved ✔';
                        setTimeout(() => {
                            saveBtn.textContent = 'Save';
                            saveBtn.removeAttribute('disabled');
                        }, 2500);
                    }
                })
                .catch(() => {
                    saveBtn.textContent = 'Error!';
                    setTimeout(() => {
                        saveBtn.removeAttribute('disabled');
                    }, 2500);
                });
        });
    });
}
