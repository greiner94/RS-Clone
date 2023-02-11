import { NewBlockInputData } from '../../../ts/type/type';
const EMAIL: NewBlockInputData[] = [
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
                blockName: 'Email address',
                desc: '',
                content: [
                    {
                        type: 'text',
                        inputName: 'Name',
                        placeholder: 'e.g. Tony',
                        bigsize: false,
                        require: true,
                    },
                    {
                        type: 'email',
                        inputName: 'Email',
                        placeholder: 'e.g. your@gmail.com',
                        bigsize: false,
                        require: true,
                    },
                ],
            },
        ],
    },
];

export default EMAIL;
