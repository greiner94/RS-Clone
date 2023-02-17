import getUserID from './getUserID';

export default async function deleteUserQrCodeData(id: number): Promise<void> {
    const url = `https://qr-api-vks7.onrender.com/api/qr/${getUserID()}`;
    const response: Response = await fetch(url, {
        method: 'DELETE',
    });
    console.log('response', response);
}
