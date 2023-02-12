export default function geo() {
    const latitude = document.querySelector('#latitude') as HTMLInputElement;
    const longitude = document.querySelector('#longitude') as HTMLInputElement;
    const isValidArr = [];

    if (isNaN(+latitude.value) || !latitude.value) {
        latitude.classList.add('invalid-input');
        isValidArr.push(false);
    } else {
        latitude.classList.remove('invalid-input');
        isValidArr.push(true);
    }

    if (isNaN(+longitude.value) || !longitude.value) {
        longitude.classList.add('invalid-input');
        isValidArr.push(false);
    } else {
        longitude.classList.remove('invalid-input');
        isValidArr.push(true);
    }

    return isValidArr.every((stutus) => stutus);
}
