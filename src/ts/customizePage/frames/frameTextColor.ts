import { renderCurrentFrameState } from './renderCurrentFrameState';

export default function frameTextColor() {
    const frameTextColorInput = document.querySelector('#textcolor') as HTMLInputElement;
    const frameTextColorCercleInput = frameTextColorInput.nextElementSibling as HTMLInputElement;

    frameTextColorInput.addEventListener('input', renderCurrentFrameState);
    frameTextColorCercleInput.addEventListener('input', renderCurrentFrameState);
}
