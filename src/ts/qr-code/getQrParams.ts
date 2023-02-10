export default function getQrParams() {
    type hashName =
        | 'contacts'
        | 'email'
        | 'WebsiteURL'
        | 'calendar'
        | 'geolocation'
        | 'text'
        | 'sms'
        | 'phoneNumber'
        | 'wiFi';

    const listOfQrTypes = {
        contacts: () => 'cba.com',
        email: () => 'cba.com',
        calendar: () => 'funcName',
        geolocation: () => 'funcName',
        WebsiteURL: () => 'cba.com',
        text: () => 'funcName',
        sms: () => 'funcName',
        phoneNumber: () => 'funcName',
        wiFi: () => 'funcName',
    };

    const hash = window.location.hash.slice(1) as hashName;
    const qrCodeDescrInput = document.querySelector('.main__content-name-input-block input') as HTMLInputElement;
    const qrCodeDescrValue = qrCodeDescrInput.value;

    if (listOfQrTypes.hasOwnProperty(hash)) {
        return {
            descr: qrCodeDescrValue,
            textString: listOfQrTypes[hash](),
        };
    } else {
        return {
            descr: '',
            textString: '',
        };
    }
}
