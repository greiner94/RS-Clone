export default function sms() {
    const phonenumberElem = document.querySelector('#phonenumber') as HTMLInputElement;
    const smsTextElem = document.querySelector('#text') as HTMLInputElement;
    const isValidArr = [];

    if (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phonenumberElem.value) && phonenumberElem.value != '') {
        phonenumberElem.classList.remove('invalid-input');
        isValidArr.push(true);
    } else {
        phonenumberElem.classList.add('invalid-input');
        isValidArr.push(false);
    }

    if (smsTextElem.value != '') {
        smsTextElem.classList.remove('invalid-input');
        isValidArr.push(true);
    } else {
        smsTextElem.classList.add('invalid-input');
        isValidArr.push(false);
    }

    return isValidArr.every((stutus) => stutus);
}
