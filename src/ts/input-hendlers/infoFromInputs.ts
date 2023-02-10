export default function infoFromInputs() {
    const inputs = Array.from(document.querySelectorAll('input'));

    console.log(inputs);

    const valuesOfInputs = inputs.map((input) => input.value);

    console.log(valuesOfInputs);
}
