export const Templates = [
    {
        nameOfTemplate: 'WebsiteURL',
        title: 'Add content to the Website URL QR code',
        inputs: [
            { name: 'name', inputTitle: 'Name your QR code*', placeholder: 'e.g. My first QR code' },
            {
                name: 'address',
                inputTitle: 'Enter the URL to which the QR code will link',
                placeholder: 'e.g. My first QR code',
            },
        ],
        image: '../../assets/images/smartphone/website-template-picture.jpg',
    },
    {
        nameOfTemplate: 'SimpleText',
        title: 'Add content to the Simple Text QR code',
        inputs: [
            { name: 'name', inputTitle: 'Name your QR code*', placeholder: 'e.g. My first QR code' },
            {
                name: 'address',
                inputTitle: 'Enter the text that you want displayed when a user scans your QR code',
                placeholder: 'e.g. The concert will take place at 9pm on October 12.',
            },
        ],
    },
];
