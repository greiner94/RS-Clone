export default function vCard() {
    const emailElem = document.querySelector('#email') as HTMLInputElement;
    const nameElem = document.querySelector('#name') as HTMLInputElement;
    const lastnameElem = document.querySelector('#lastname') as HTMLInputElement;
    const websiteElem = document.querySelector('#website') as HTMLInputElement;
    const phonenumberElem = document.querySelector('#phonenumber') as HTMLInputElement;
    const alternativephonenumberElem = document.querySelector('#alternativephonenumber') as HTMLInputElement;
    const companynameElem = document.querySelector('#companyname') as HTMLInputElement;
    const professionElem = document.querySelector('#profession') as HTMLInputElement;
    const textElem = document.querySelector('#text') as HTMLInputElement;

    return `
BEGIN:VCARD
VERSION:3.0
N:${nameElem.value} ${lastnameElem.value}
ORG:${companynameElem.value}
TITLE:${professionElem.value}
TEL;type=WORK:${phonenumberElem.value}
TEL;type=CELL:${alternativephonenumberElem.value}
URL:${websiteElem.value}
EMAIL:${emailElem.value}
NOTE:${textElem.value}
END:VCARD
    `;
}
