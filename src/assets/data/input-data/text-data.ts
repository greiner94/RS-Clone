import { NewBlockInputData } from '../../../ts/type/type';
const TEXT: NewBlockInputData[] = [
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
        bigBlockName: 'Simple text',
        bigBlockDesc: 'Enter the text that you want displayed when a user scans your QR code',
        hide: true,
        data: [
            {
                blockName: '',
                desc: '',
                content: [
                    {
                        type: 'text',
                        inputName: 'Text',
                        placeholder: 'e.g. The concert will take place at 9pm on March 10',
                        bigsize: true,
                        require: false,
                    },
                ],
            },
        ],
    },
];

export default TEXT;
