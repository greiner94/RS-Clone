import { BlockInputData } from '../../../ts/type/type';
const EMAIL: BlockInputData[] = [
    {
        blockName: 'Email address',
        desc: '',
        content: [
            {
                type: 'text',
                inputName: 'Name',
                placeholder: 'e.g. Tony',
                bigsize: false,
            },
            {
                type: 'email',
                inputName: 'Email',
                placeholder: 'e.g. your@gmail.com',
                bigsize: false,
            },
        ],
    },
];

export default EMAIL;
