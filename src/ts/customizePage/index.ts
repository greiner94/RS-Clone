import frames from './frames';
import logos from './logos';
import getQrCode from '../qr-code/getQrCode';
import setQrToPreview from '../qr-code/setQrToPreview';
import { renderCurrentFrameState } from './frames/renderCurrentFrameState';
import renderCurrentLogoState from './logos/renderCurrentLogoState';
import download from './download';
import print from './print';
import save from './save';

export default function customizePage() {
    setQrToPreview(localStorage.getItem('qrPath') || '');

    frames();
    logos();
    download();
    print();
    save();

    const bgcInput = document.querySelector('#backgroundcolor') as HTMLInputElement;
    const transparentInput = document.querySelector('#transparentbackground') as HTMLInputElement;
    const colorBgcInput = bgcInput.nextElementSibling as HTMLInputElement;
    const frameTextColorInput = document.querySelector('#texturecolor') as HTMLInputElement;
    const colorTextInput = frameTextColorInput.nextElementSibling as HTMLInputElement;
    [bgcInput, transparentInput, colorBgcInput, frameTextColorInput, colorTextInput].forEach((input) => {
        input.addEventListener('input', () => {
            getQrCode().then(() => {
                renderCurrentFrameState();
                renderCurrentLogoState();
            });
        });
    });

    const selectElements = document.querySelectorAll('.select') as NodeListOf<HTMLSelectElement>;
    selectElements.forEach((select) => {
        select.addEventListener('change', () => {
            getQrCode().then(() => {
                renderCurrentFrameState();
                renderCurrentLogoState();
            });
        });
    });
}
