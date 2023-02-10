import { BlockInputData } from '../../../ts/type/type';
const SMS: BlockInputData[] = [
    {
        blockName: 'SMS messange',
        desc: '',
        content: [
            {
                type: 'tel',
                inputName: 'Phone number',
                placeholder: 'e.g. +1809999999',
                bigsize: false,
            },
            {
                type: 'text',
                inputName: 'Text',
                placeholder: 'e.g. You are late',
                bigsize: false,
            },
        ],
    },
];

export default SMS;
