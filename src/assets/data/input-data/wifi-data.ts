import { BlockInputData } from '../../../ts/type/type';
const WIFI: BlockInputData[] = [
    {
        blockName: 'WI-FI',
        desc: 'Provide your Wi-Fi name, the type of encription and your password',
        content: [
            {
                type: 'text',
                inputName: 'Network name',
                placeholder: 'e.g. Your Wi-Fi',
                bigsize: false,
            },
            {
                type: 'text',
                inputName: 'Password',
                placeholder: 'e.g. yourpassword',
                bigsize: false,
            },
            {
                type: 'select',
                inputName: 'Encryption type',
                placeholder: '',
                bigsize: false,
                list: ['WEP', 'WPA/WPA2', 'No encryption'],
            },
            {
                type: 'checkbox',
                inputName: 'Hidden network',
                placeholder: '',
                bigsize: false,
            },
        ],
    },
];

export default WIFI;
