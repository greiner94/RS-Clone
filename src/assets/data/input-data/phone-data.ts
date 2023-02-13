import { NewBlockInputData } from '../../../ts/type/type';
const PHONE: NewBlockInputData[] = [
    {
        data: [
            {
                blockName: '',
                desc: '',
                content: [
                    {
                        type: 'text',
                        inputName: 'Name your QR code',
                        placeholder: 'e.g. Your first QR code',
                        bigsize: false,
                        require: false,
                    },
                ],
            },
        ],
    },
    {
        bigBlockName: 'Phone number',
        bigBlockDesc: 'Enter the phone number for share by QR code',
        hide: true,
        data: [
            {
                blockName: '',
                desc: '',
                content: [
                    {
                        type: 'tel',
                        inputName: 'Your number',
                        placeholder: 'e.g. +1809999999',
                        bigsize: false,
                        require: false,
                    },
                ],
            },
        ],
    },
];

export default PHONE;
