import imgURL from '../images/smartphone/website-template-picture.jpg';

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
        mainContent: `
        <div class="preview-box-inside__content-container">
            <div class="preview-box-inside__content-img">
                <img src="${imgURL}" alt="website-template">
            </div>
            <div class="preview-box-inside__content-main">
                <div class="preview-box-inside__content-main-title">
                    Learn more about plants
                </div>
                <div class="preview-box-inside__content-main-subtitle">
                    Read how to care for plants in our guide
                </div>
                <button class="preview-box-inside__content-main-button">View more</button>
            </div>
        </div>
        `,
    },
    {
        nameOfTemplate: 'SimpleText',
        title: 'Add content to the Simple Text QR code',
        inputs: [
            { name: 'name', inputTitle: 'Name your QR code*', placeholder: 'e.g. My first QR code' },
            {
                name: 'text',
                inputTitle: 'Enter the text that you want displayed when a user scans your QR code',
                placeholder: 'e.g. The concert will take place at 9pm on October 12.',
            },
        ],
        mainContent: `
        <div class="preview-box-inside__content-container">
            <p class="preview-box-inside__content-text">
                Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration; but this prescription is not consistently followed, even by most health care providers, because the term respiratory rate (RR) is a well-established term in health care, even though it would need to be consistently replaced with ventilation rate if the precise usage were to be followed.
            </p>
        </div>
        `,
    },
];
