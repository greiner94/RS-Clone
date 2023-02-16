import checkedLogosBehaviour from './checkedLogosBehaviour';

export default function drugAndDrop() {
    const uploadInput = document.querySelector('.upload__input') as HTMLInputElement;
    uploadInput.addEventListener('change', () => {
        if (uploadInput.files) {
            const fileName = URL.createObjectURL(uploadInput.files[0]);

            const logosWrapper = document.querySelector('.input-bigblock-wrapper .choose-block') as HTMLInputElement;
            const imgWrapper = document.createElement('div');
            const img = document.createElement('img');

            imgWrapper.classList.add('frame-wrapper-by-drugging');
            img.src = fileName;
            imgWrapper.appendChild(img);
            logosWrapper.insertAdjacentElement('beforeend', imgWrapper);

            const logos = Array.from(logosWrapper.children) as HTMLElement[];
            logos.forEach((logo) => {
                logos.forEach((logo) => logo.classList.remove('active'));
                if (logo.classList.contains('frame-wrapper-by-drugging')) {
                    console.log(logo);
                    logo.className = 'frame-wrapper';
                    checkedLogosBehaviour();
                    logo.click();
                }
            });
        }
    });
}
