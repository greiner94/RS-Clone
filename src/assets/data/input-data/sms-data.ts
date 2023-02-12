import { NewBlockInputData } from '../../../ts/type/type';
const SMS: NewBlockInputData[] = [
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
                        require: true,
                    },
                ],
            },
        ],
    },
    {
        data: [
            {
                blockName: 'SMS messange',
                desc: '',
                content: [
                    {
                        type: 'tel',
                        inputName: 'Phone number',
                        placeholder: 'e.g. +1809999999',
                        bigsize: false,
                        require: true,
                    },
                    {
                        type: 'text',
                        inputName: 'Text',
                        placeholder: 'e.g. You are late',
                        bigsize: false,
                        require: true,
                    },
                ],
            },
        ],
    },
];

export default SMS;
