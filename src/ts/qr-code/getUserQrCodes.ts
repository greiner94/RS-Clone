import getUserID from './getUserID';
import { QrCodeData } from '../type/type';

export default async function getUserQrCodeData(): Promise<QrCodeData[]> {
    const url = `https://qr-api-vks7.onrender.com/api/qr/${getUserID()}`;
    const response: Response = await fetch(url);
    console.log('response', response);
    const data = await response.json();
    console.log('data', data);
    // const { data, error } = await response.json();
    // console.log('data', data);
    // console.log('error', error);
    // if (error) {
    //     throw new Error(error.message ?? 'Custom Error');
    // }
    const userData: QrCodeData[] = JSON.parse(JSON.stringify(data));
    return userData;
}
