import getQrCode from '../../qr-code/getQrCode';
import { renderCurrentFrameState } from '../frames/renderCurrentFrameState';

export default function renderCurrentLogoState() {
    if (document.querySelector('.template__preview-qr_loader')) return;
    const logoElements = document.querySelectorAll('.all-input-wrapper .frame-wrapper') as NodeListOf<HTMLElement>;
    const qrImgWrapper = document.querySelector('.template__preview-qr-wrapper') as HTMLInputElement;
    logoElements.forEach((logo) => {
        if (logo.classList.contains('active')) {
            const selectCorrection = (document.querySelectorAll('.select') as NodeListOf<HTMLSelectElement>)[1];
            if (selectCorrection.value != 'Level H 30%') {
                selectCorrection.value = 'Level H 30%';
                getQrCode().then(() => {
                    renderCurrentFrameState();
                    renderCurrentLogoState();
                });
            }

            const image = logo.firstElementChild as HTMLElement;
            const cloneImage = image.cloneNode(true) as HTMLElement;

            document.querySelector('.template__preview-logo')?.remove();
            cloneImage.classList.add('template__preview-logo');
            qrImgWrapper.appendChild(cloneImage);

            const frameTypes = document.querySelectorAll('.frame-wrap-all .frame-wrapper') as NodeListOf<HTMLElement>;
            const checkedqrSize = (document.querySelector('.select') as HTMLSelectElement).value;
            let checkedFrameTypeIndex = 0;
            frameTypes.forEach((frame, index) => {
                if (frame.classList.contains('active')) {
                    checkedFrameTypeIndex = index;
                }
            });

            switch (checkedFrameTypeIndex) {
                case 2: {
                    cloneImage.style.top = '41%';
                    break;
                }
                case 3: {
                    cloneImage.style.top = '41%';
                    break;
                }
                default:
                    cloneImage.style.top = '50%';
                    break;
            }
            switch (checkedqrSize) {
                case 'Medium': {
                    cloneImage.style.width = '45px';
                    break;
                }
                case 'Small': {
                    cloneImage.style.width = '26px';
                    break;
                }
                default:
                    cloneImage.style.width = '55px';
                    break;
            }
        }
    });
}
