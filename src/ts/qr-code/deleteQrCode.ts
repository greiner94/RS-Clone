import { getTableContent } from '../draw-page/draw-user-page';
import getUserID from './getUserID';

export async function deleteUserQrCodeData(id: number) {
    const body = { id };
    const url = `https://qr-api-vks7.onrender.com/api/qr/ready/${getUserID()}`;
    await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
}

export async function deleteArrQrCodeData(idArr: number[]): Promise<void> {
    const deletePromiseArr = idArr.map((id) => {
        deleteUserQrCodeData(id);
    });
    await getTableContent();
    Promise.all(deletePromiseArr).then(() => {
        getTableContent();
    });
}
