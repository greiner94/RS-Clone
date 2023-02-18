import domtoimage from 'dom-to-image';

export default function download() {
    const downloadButton = document.querySelector('.btn-download') as HTMLElement;
    downloadButton.addEventListener('click', () => {
        const qrElement = document.querySelector('.template__preview-qr-wrapper') as HTMLElement;
        domtoimage.toPng(qrElement).then((dataUrl) => {
            const link = document.createElement('a');
            link.download = 'my-qr-code.png';
            link.href = dataUrl;
            link.click();
        });
    });
}