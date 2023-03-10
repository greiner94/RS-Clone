import { ModalData } from '../../ts/type/type';

export const SHARE: ModalData = {
    h3: 'Share QR code',
    desc: 'Copy the link below and share it with others',
    content: `<div class="share-url-wrap"><span class="modal__share-url">**</span>
                <button class="modal__copy-btn">copy</button>
            </div>`,
};

export const SHOW: ModalData = {
    h3: 'Scan QR code',
    desc: '',
    content: `<div class="qr-wrap"><img class="modal__qr-img" src="**">
            </div>`,
};
