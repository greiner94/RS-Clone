import { qrTypes } from '../type/type';
import calendar from './stringCreators/calendar';
import email from './stringCreators/email';
import geo from './stringCreators/geo';
import phone from './stringCreators/phone';
import sms from './stringCreators/sms';
import text from './stringCreators/text';
import url from './stringCreators/url';
import vCard from './stringCreators/vCard';
import wiFi from './stringCreators/wiFi';

interface IQrBody {
    descr: string;
    textString: string;
}

export default function getQrParams() {
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
    const splitedHash = window.location.hash.split('/');
    const checkedQrType = splitedHash[splitedHash.length - 1] as qrTypes;
    const qrCodeName = document.querySelector('#nameyourqrcode') as HTMLInputElement;

    if (listOfQrTypes.hasOwnProperty(checkedQrType)) {
        return {
            descr: qrCodeName.value,
            textString: listOfQrTypes[checkedQrType](),
        };
    } else {
        const qrBody: IQrBody = JSON.parse(localStorage.getItem('qrBody') || '');
        return {
            descr: qrBody.descr,
            textString: qrBody.textString,
        };
    }
}
