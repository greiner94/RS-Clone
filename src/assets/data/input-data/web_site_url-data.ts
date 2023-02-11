import { NewBlockInputData } from '../../../ts/type/type';
const WEBSITE: NewBlockInputData[] = [
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
        bigBlockName: 'Website address',
        bigBlockDesc: 'Enter the URL to which the QR code will link',
        hide: true,
        data: [
            {
                blockName: '',
                desc: '',
                content: [
                    {
                        type: 'url',
                        inputName: 'Website Url',
                        placeholder: 'e.g. https://yourwebsite.com',
                        bigsize: false,
                        require: true,
                    },
                ],
            },
        ],
    },
];

export default WEBSITE;
