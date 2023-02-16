import renderCurrentLogoState from '../logos/renderCurrentLogoState';

export function renderCurrentFrameState() {
    if (document.querySelector('.template__preview-qr_loader')) return;
    const allFrames = document.querySelectorAll('.frame-wrap-all .frame-wrapper') as NodeListOf<HTMLElement>;
    let index = 0;
    allFrames.forEach((frame, checkedIndex) => {
        if (frame.classList.contains('active')) {
            index = checkedIndex;
        }
    });
    const frameWrapper = document.querySelector('.template__preview-qr-wrapper') as HTMLElement;
    const frameWrapperBaseClass = 'template__preview-qr-wrapper';
    const checkedFrameColor = (document.querySelector('#framecolor') as HTMLInputElement).value;
    const checkedTextFrameColor = (document.querySelector('#textcolor') as HTMLInputElement).value;
    const textWrapper = document.createElement('div');
    const textWrapperBaseClass = 'template__preview-qr-text';
    textWrapper.textContent = (document.querySelector('#frametext') as HTMLInputElement)?.value || 'Scan me!';
    document.querySelector('.template__preview-qr-text')?.remove();
    switch (index) {
        case 1: {
            frameWrapper.className = frameWrapperBaseClass + ' ' + frameWrapperBaseClass + '_small';
            textWrapper.className = textWrapperBaseClass + ' ' + textWrapperBaseClass + '_separate';
            frameWrapper.insertAdjacentElement('beforeend', textWrapper);
            break;
        }
        case 2: {
            frameWrapper.className = frameWrapperBaseClass + ' ' + frameWrapperBaseClass + '_large';
            textWrapper.className = textWrapperBaseClass + ' ' + textWrapperBaseClass + '_along-black';
            textWrapper.style.background = checkedFrameColor;
            frameWrapper.style.borderColor = checkedFrameColor;
            frameWrapper.insertAdjacentElement('beforeend', textWrapper);
            break;
        }
        case 3: {
            frameWrapper.className = frameWrapperBaseClass + ' ' + frameWrapperBaseClass + '_large';
            textWrapper.className = textWrapperBaseClass + ' ' + textWrapperBaseClass + '_along-white';
            frameWrapper.style.borderColor = checkedFrameColor;
            frameWrapper.insertAdjacentElement('beforeend', textWrapper);
            break;
        }
        case 4: {
            frameWrapper.className = frameWrapperBaseClass + ' ' + frameWrapperBaseClass + '_small';
            textWrapper.className = textWrapperBaseClass + ' ' + textWrapperBaseClass + '_separate-black';
            textWrapper.style.background = checkedFrameColor;
            frameWrapper.style.borderColor = checkedFrameColor;
            frameWrapper.insertAdjacentElement('beforeend', textWrapper);
            break;
        }
        case 5: {
            frameWrapper.className = frameWrapperBaseClass + ' ' + frameWrapperBaseClass + '_small';
            textWrapper.className = textWrapperBaseClass + ' ' + textWrapperBaseClass + '_separate-white';
            textWrapper.style.borderColor = checkedFrameColor;
            frameWrapper.style.borderColor = checkedFrameColor;
            frameWrapper.insertAdjacentElement('beforeend', textWrapper);
            break;
        }
        default: {
            frameWrapper.className = frameWrapperBaseClass + ' ' + frameWrapperBaseClass + '_none';
        }
    }

    textWrapper.style.color = checkedTextFrameColor;
    renderCurrentLogoState();
}
