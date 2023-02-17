import domtoimage from 'dom-to-image';
import getUserID from '../qr-code/getUserID';

export default function save() {
    const saveBtn = document.querySelector('.btn-save') as HTMLElement;
    saveBtn.addEventListener('click', () => {
        const qrElement = document.querySelector('.template__preview-qr-wrapper') as HTMLElement;
        const { type, descr } = JSON.parse(localStorage.getItem('qrBody') || '');
        domtoimage.toPng(qrElement).then((dataUrl) => {
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
                        saveBtn.style.background = '#143b74';
                        setTimeout(() => {
                            saveBtn.textContent = 'Save';
                            saveBtn.style.background = '#1183bc';
                        }, 1500);
                        console.log('saved!');
                    }
                })
                .catch((err) => {
                    saveBtn.textContent = 'Error!';
                    console.log(err);
                });
        });
    });
}
