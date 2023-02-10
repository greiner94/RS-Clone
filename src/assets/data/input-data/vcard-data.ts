const VCARD = [
    {
        blockName: 'Personal information',
        desc: '',
        content: [
            {
                type: 'text',
                inputName: 'Name',
                placeholder: 'e.g. Dmitriy',
                bigsize: false,
            },
            {
                type: 'text',
                inputName: 'Last name',
                placeholder: 'e.g. Kalush',
                bigsize: false,
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
            },
            {
                type: 'tel',
                inputName: 'Alternative phone number',
                placeholder: 'e.g. +1809999999',
                bigsize: false,
            },
            {
                type: 'email',
                inputName: 'Email',
                placeholder: 'e.g. your@gmail.com',
                bigsize: false,
            },
            {
                type: 'url',
                inputName: 'Website',
                placeholder: 'e.g. https://yourwebsite.com',
                bigsize: false,
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
            },
            {
                type: 'text',
                inputName: 'Profession',
                placeholder: 'e.g. Developer',
                bigsize: false,
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
            },
        ],
    },
];
export default VCARD;
