import getUserID from './getUserID';
import { QrCodeData } from '../type/type';

export default async function getUserQrCodeData(): Promise<QrCodeData[]> {
    const url = `https://qr-api-vks7.onrender.com/api/qr/ready/${getUserID()}`;
    const response: Response = await fetch(url);
    const data = await response.json();
    const userData: QrCodeData[] = JSON.parse(JSON.stringify(data));
    return userData;
}
