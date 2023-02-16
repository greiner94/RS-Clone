import { renderCurrentFrameState } from './renderCurrentFrameState';

export default function frameText() {
    const frameTextElem = document.querySelector('#frametext') as HTMLInputElement;
    frameTextElem.addEventListener('input', renderCurrentFrameState);
}
