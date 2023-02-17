import { renderCurrentFrameState } from './renderCurrentFrameState';

export function frameType() {
    const allFrames = document.querySelectorAll('.frame-wrap-all .frame-wrapper') as NodeListOf<HTMLElement>;
    allFrames.forEach((frameElem) => {
        frameElem.addEventListener('click', () => {
            allFrames.forEach((frame) => frame.classList.remove('active'));

            if (frameElem.classList.contains('active')) {
                frameElem.classList.remove('active');
            } else {
                frameElem.classList.add('active');
            }
            renderCurrentFrameState();
        });
    });
}
