export default function vCard() {
    const emailElem = document.querySelector('#email') as HTMLInputElement;
    const nameElem = document.querySelector('#name') as HTMLInputElement;
    const websiteElem = document.querySelector('#website') as HTMLInputElement;
    const phonenumberElem = document.querySelector('#phonenumber') as HTMLInputElement;
    const alternativephonenumberElem = document.querySelector('#alternativephonenumber') as HTMLInputElement;
    const isValidArr = [];

    if (nameElem.value !== '') {
        nameElem.classList.remove('invalid-input');
        isValidArr.push(true);
    } else {
        nameElem.classList.add('invalid-input');
        isValidArr.push(false);
    }

    if (
        /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
            websiteElem.value
        ) ||
        websiteElem.value == ''
    ) {
        websiteElem.classList.remove('invalid-input');
        isValidArr.push(true);
    } else {
        websiteElem.classList.add('invalid-input');
        isValidArr.push(false);
    }

    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailElem.value) || emailElem.value == '') {
        emailElem.classList.remove('invalid-input');
        isValidArr.push(true);
    } else {
        emailElem.classList.add('invalid-input');
        isValidArr.push(false);
    }

    if (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phonenumberElem.value) || phonenumberElem.value == '') {
        phonenumberElem.classList.remove('invalid-input');
        isValidArr.push(true);
    } else {
        phonenumberElem.classList.add('invalid-input');
        isValidArr.push(false);
    }

    if (
        /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(alternativephonenumberElem.value) ||
        alternativephonenumberElem.value == ''
    ) {
        alternativephonenumberElem.classList.remove('invalid-input');
        isValidArr.push(true);
    } else {
        alternativephonenumberElem.classList.add('invalid-input');
        isValidArr.push(false);
    }

    return isValidArr.every((stutus) => stutus);
}
