import { renderCurrentFrameState } from './renderCurrentFrameState';

export default function frameColor() {
    const frameColorInputElem = document.querySelector('#framecolor') as HTMLInputElement;
    const frameColorCercleInputElem = frameColorInputElem.nextElementSibling as HTMLInputElement;

    frameColorInputElem.addEventListener('input', renderCurrentFrameState);
    frameColorCercleInputElem.addEventListener('input', renderCurrentFrameState);
}
