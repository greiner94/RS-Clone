import { BlockInputData } from '../../../ts/type/type';
const GEOLOCATION: BlockInputData[] = [
    {
        blockName: 'Geolocation',
        desc: '',
        content: [
            {
                type: 'text',
                inputName: 'Latitude',
                placeholder: 'e.g. 41.40338',
                bigsize: false,
            },
            {
                type: 'text',
                inputName: 'Longitude',
                placeholder: 'e.g. 2.17403',
                bigsize: false,
            },
        ],
    },
];

export default GEOLOCATION;
