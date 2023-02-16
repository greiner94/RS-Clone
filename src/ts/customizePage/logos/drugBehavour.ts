import renderCurrentLogoState from './renderCurrentLogoState';

export default function drugBehavour() {
    const uploadInput = document.querySelector('.upload__input') as HTMLInputElement;

    uploadInput.addEventListener('dragover', () => {
        (uploadInput.parentElement as HTMLElement).classList.add('draging');
    });
    uploadInput.addEventListener('dragleave', () => {
        (uploadInput.parentElement as HTMLElement).classList.remove('draging');
    });
    uploadInput.addEventListener('drop', () => {
        (uploadInput.parentElement as HTMLElement).classList.remove('draging');
    });
    uploadInput.addEventListener('change', renderCurrentLogoState);
}
