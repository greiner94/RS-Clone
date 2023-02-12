export default function sms() {
    const phonenumberElem = document.querySelector('#phonenumber') as HTMLInputElement;

    if (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phonenumberElem.value) || phonenumberElem.value == '') {
        phonenumberElem.classList.remove('invalid-input');
        return true;
    } else {
        phonenumberElem.classList.add('invalid-input');
        return false;
    }
}
