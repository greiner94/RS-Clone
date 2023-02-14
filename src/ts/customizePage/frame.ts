export default function frame() {
    const allFrames = document.querySelectorAll('.frame-wrap-all .frame-wrapper') as NodeListOf<HTMLElement>;
    allFrames.forEach((frameElem, index) => {
        frameElem.addEventListener('click', () => {
            allFrames.forEach((frame) => frame.classList.remove('active'));

            if (frameElem.classList.contains('active')) {
                frameElem.classList.remove('active');
            } else {
                frameElem.classList.add('active');
            }
            console.log(index);
        });
    });
}
