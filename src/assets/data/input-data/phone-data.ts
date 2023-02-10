import { BlockInputData } from '../../../ts/type/type';
const PHONE: BlockInputData[] = [
    {
        blockName: 'Phone number',
        desc: 'Enter the phone number for share by QR code',
        content: [
            {
                type: 'tel',
                inputName: 'Your number',
                placeholder: 'e.g. +1809999999',
                bigsize: false,
            },
        ],
    },
];

export default PHONE;
