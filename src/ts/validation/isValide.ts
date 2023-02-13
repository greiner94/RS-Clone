import url from './validationForDiffTypes/url';
import { qrTypes } from '../type/type';
import wiFi from './validationForDiffTypes/wiFi';
import vCard from './validationForDiffTypes/vCard';
import text from './validationForDiffTypes/text';
import email from './validationForDiffTypes/email';
import sms from './validationForDiffTypes/sms';
import calendar from './validationForDiffTypes/calendar';
import geo from './validationForDiffTypes/geo';
import phone from './validationForDiffTypes/phone';
import isQrHasName from './validationForDiffTypes/isQrHasName';

const listOfQrTypes = {
    WebsiteURL: url,
    'Wi-Fi': wiFi,
    vCard: vCard,
    SimpleText: text,
    Email: email,
    SMS: sms,
    Calendar: calendar,
    Geolocation: geo,
    PhoneNumber: phone,
};

export default function isValid() {
    const splitedHash = window.location.hash.split('/');
    const checkedQrType = splitedHash[splitedHash.length - 1] as qrTypes;
    const nextBtn = document.querySelector('.btn-next') as HTMLButtonElement;

    nextBtn.setAttribute('disabled', 'true');

    const isValid = listOfQrTypes[checkedQrType]() && isQrHasName();
    isValid ? nextBtn.removeAttribute('disabled') : nextBtn.setAttribute('disabled', 'true');

    return isValid;
}
