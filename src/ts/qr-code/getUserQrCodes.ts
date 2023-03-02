import getUserID from './getUserID';
import { QrCodeData } from '../type/type';

export default function getUserQrCodeData(): Promise<QrCodeData[]> {
    const url = `https://qr-api-vks7.onrender.com/api/qr/ready/${getUserID()}`;
    return new Promise<QrCodeData[]>((resolve) => {
        fetch(url)
            .then((res: Response) => res.json())
            .then((data: QrCodeData[]) => {
                JSON.parse(JSON.stringify(data));
                resolve(data);
            })
            .catch(() => {
                resolve([]);
            });
    });
}
