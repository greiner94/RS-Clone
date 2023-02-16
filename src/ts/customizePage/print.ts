import domtoimage from 'dom-to-image';

export default function print() {
    const printButton = document.querySelector('.btn-print') as HTMLElement;
    printButton.addEventListener('click', () => {
        const qrElement = document.querySelector('.template__preview-qr-wrapper') as HTMLElement;
        domtoimage.toPng(qrElement).then((dataUrl) => {
            const a = window.open('', '', 'height=500, width=500');
            if (a) {
                a.document.write('<html>');
                a.document.write(`<img src=${dataUrl}>`);
                a.document.write('</body></html>');
                a.document.close();
                a.print();
            }
        });
    });
}
