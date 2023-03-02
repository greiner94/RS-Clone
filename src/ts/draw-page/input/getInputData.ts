import CALENDAR from '../../../assets/data/input-data/calendar-data';
import FINISH from '../../../assets/data/input-data/customize-design';
import EMAIL from '../../../assets/data/input-data/email-data';
import GEOLOCATION from '../../../assets/data/input-data/geolocation-data';
import PHONE from '../../../assets/data/input-data/phone-data';
import SMS from '../../../assets/data/input-data/sms-data';
import TEXT from '../../../assets/data/input-data/text-data';
import VCARD from '../../../assets/data/input-data/vcard-data';
import WEBSITE from '../../../assets/data/input-data/web_site_url-data';
import WIFI from '../../../assets/data/input-data/wifi-data';
import { NewBlockInputData } from '../../type/type';
import { InputDataUrl } from '../../type/type';

const InputData: InputDataUrl = {
    WebsiteURL: WEBSITE,
    'Wi-Fi': WIFI,
    vCard: VCARD,
    SimpleText: TEXT,
    Email: EMAIL,
    SMS: SMS,
    Calendar: CALENDAR,
    Geolocation: GEOLOCATION,
    PhoneNumber: PHONE,
    customize: FINISH,
};

export function getInputData(url: string): NewBlockInputData[] {
    return InputData[url] as NewBlockInputData[];
}
