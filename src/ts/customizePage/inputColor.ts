export default function inputColor() {
    const colorInputsWrap = document.querySelectorAll('.input-color') as NodeListOf<HTMLInputElement>;
    colorInputsWrap.forEach((inputWrap) => {
        const colorInput = inputWrap.firstElementChild as HTMLInputElement;
        const colorChecker = inputWrap.lastElementChild as HTMLInputElement;
        colorInput.maxLength = 7;
        colorChecker.addEventListener('input', () => {
            colorInput.value = colorChecker.value;
        });

        colorInput.addEventListener('input', () => {
            colorChecker.value = colorInput.value;
            if (colorInput.value[0] != '#') {
                colorInput.value = '#' + colorInput.value.slice(1);
            }
        });
    });
}
