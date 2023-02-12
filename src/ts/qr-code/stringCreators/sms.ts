export default function sms() {
    const phonenumberElem = document.querySelector('#phonenumber') as HTMLInputElement;
    const textElem = document.querySelector('#text') as HTMLInputElement;
    return `smsto:${phonenumberElem.value}:${textElem.value}`;
}
