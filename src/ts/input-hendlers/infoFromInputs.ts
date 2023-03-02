export default function infoFromInputs() {
    const inputs = Array.from(document.querySelectorAll('input'));
    const valuesOfInputs = inputs.map((input) => input.value);
}
