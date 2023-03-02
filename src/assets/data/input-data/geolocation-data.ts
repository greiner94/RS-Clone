import { NewBlockInputData } from '../../../ts/type/type';
const GEOLOCATION: NewBlockInputData[] = [
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
        bigBlockName: 'Geolocation',
        bigBlockDesc: 'Fill in the coordinates you want to share or save',
        hide: true,
        data: [
            {
                blockName: '',
                desc: '',
                content: [
                    {
                        type: 'text',
                        inputName: 'Latitude',
                        placeholder: 'e.g. 41.40338',
                        bigsize: false,
                        require: false,
                    },
                    {
                        type: 'text',
                        inputName: 'Longitude',
                        placeholder: 'e.g. 2.17403',
                        bigsize: false,
                        require: false,
                    },
                ],
            },
        ],
    },
];

export default GEOLOCATION;
