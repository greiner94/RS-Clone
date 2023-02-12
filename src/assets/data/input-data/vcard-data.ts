import { NewBlockInputData } from '../../../ts/type/type';

const VCARD: NewBlockInputData[] = [
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
        bigBlockName: 'About you',
        bigBlockDesc: 'Fill in the information you would like to showcase in your vCard',
        hide: true,
        data: [
            {
                blockName: 'Personal information',
                desc: '',
                content: [
                    {
                        type: 'text',
                        inputName: 'Name',
                        placeholder: 'e.g. Dmitriy',
                        bigsize: false,
                        require: true,
                    },
                    {
                        type: 'text',
                        inputName: 'Last name',
                        placeholder: 'e.g. Kalush',
                        bigsize: false,
                        require: false,
                    },
                ],
            },
            {
                blockName: 'Contact details',
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
                        type: 'tel',
                        inputName: 'Alternative phone number',
                        placeholder: 'e.g. +1809999999',
                        bigsize: false,
                        require: false,
                    },
                    {
                        type: 'email',
                        inputName: 'Email',
                        placeholder: 'e.g. your@gmail.com',
                        bigsize: false,
                        require: true,
                    },
                    {
                        type: 'url',
                        inputName: 'Website',
                        placeholder: 'e.g. https://yourwebsite.com',
                        bigsize: false,
                        require: false,
                    },
                ],
            },
            {
                blockName: 'Company details',
                desc: '',
                content: [
                    {
                        type: 'text',
                        inputName: 'Company name',
                        placeholder: 'e.g. https://yourwebsite.com',
                        bigsize: false,
                        require: false,
                    },
                    {
                        type: 'text',
                        inputName: 'Profession',
                        placeholder: 'e.g. Developer',
                        bigsize: false,
                        require: false,
                    },
                ],
            },
            {
                blockName: 'Summary',
                desc: '',
                content: [
                    {
                        type: 'text',
                        inputName: 'Text',
                        placeholder: 'e.g. About you',
                        bigsize: true,
                        require: false,
                    },
                ],
            },
        ],
    },
];
export default VCARD;
