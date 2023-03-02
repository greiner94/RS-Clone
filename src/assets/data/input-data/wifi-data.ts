import { NewBlockInputData } from '../../../ts/type/type';
const WIFI: NewBlockInputData[] = [
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
        bigBlockName: 'WI-FI',
        bigBlockDesc: 'Provide your Wi-Fi name, the type of encription and your password',
        hide: true,
        data: [
            {
                blockName: '',
                desc: '',
                content: [
                    {
                        type: 'text',
                        inputName: 'Network name',
                        placeholder: 'e.g. Your Wi-Fi',
                        bigsize: false,
                        require: false,
                    },
                    {
                        type: 'text',
                        inputName: 'Password',
                        placeholder: 'e.g. yourpassword',
                        bigsize: false,
                        require: false,
                    },
                    {
                        type: 'select',
                        inputName: 'Encryption type',
                        placeholder: '',
                        bigsize: false,
                        require: false,
                        list: ['WEP', 'WPA/WPA2', 'No encryption'],
                    },
                    {
                        type: 'checkbox',
                        inputName: 'Hidden network',
                        placeholder: '',
                        bigsize: false,
                        require: false,
                    },
                ],
            },
        ],
    },
];

export default WIFI;
