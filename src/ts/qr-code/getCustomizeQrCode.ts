import setQrToPreview from './setQrToPreview';

export default function getCustomizeQrCode() {
    const qrPath = localStorage.getItem('qrPath') as string;
    setQrToPreview(qrPath);
}
