export default function geo() {
    const latitude = document.querySelector('#latitude') as HTMLInputElement;
    const longitude = document.querySelector('#longitude') as HTMLInputElement;

    return 'geo:' + latitude.value + ',' + longitude.value;
}
