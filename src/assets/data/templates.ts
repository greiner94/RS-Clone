import imgURL from '../images/smartphone/website-template-picture.jpg';
import imgCalendar from '../images/smartphone/calendar.png';
import sms from '../images/smartphone/sms.png';
import location from '../images/smartphone/location.jpg';
import number from '../images/smartphone/number.jpg';
import vCard from '../images/smartphone/vcard.jpg';
import eMail from '../images/smartphone/email.png';

export const Templates = [
    {
        nameOfTemplate: 'WebsiteURL',
        title: '2. Add content to the Website URL QR code',
        mainContent: `
        <div class="preview-box-inside__content-container website-url">
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
        nameOfTemplate: 'Wi-Fi',
        title: '2. Add content to the Wi-Fi QR code',
        mainContent: `
        <div class="preview-box-inside__content-container smartphone-wi-fi">
                                    <div class="preview-box-inside__content-top smartphone-wi-fi">
                                        <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M45.21 64.7a6.65 6.65 0 0 0-2.16-10.86 6.65 6.65 0 0 0-7.26 1.44 6.66 6.66 0 1 0 9.42 9.43ZM68.78 38.4a6.64 6.64 0 0 1-4.71-1.96c-13-13-34.14-13-47.14 0A6.67 6.67 0 0 1 7.5 27a46.72 46.72 0 0 1 66 0 6.67 6.67 0 0 1-4.72 11.39ZM26.36 52.53a6.67 6.67 0 0 1-4.72-11.38 26.7 26.7 0 0 1 37.71 0 6.67 6.67 0 1 1-9.43 9.43 13.35 13.35 0 0 0-18.85 0 6.64 6.64 0 0 1-4.71 1.95Z" fill="#E3E3E3"></path></svg>
                                        <div class="preview-box-inside__content-body smartphone-wi-fi">
                                            <span>Connect to a network</span>
                                            <span class="preview-box-inside__content-body-text smartphone-wi-fi"><b>My Wi-Fi</b></span>
                                        </div>
                                    </div>
                                    <div class="preview-box-inside__content-btns smartphone-wi-fi">
                                        <button class="preview-box-inside__content-btn btn-connect smartphone-wi-fi">Connect</button>
                                        <button class="preview-box-inside__content-btn btn-close smartphone-wi-fi">Close</button>
                                    </div>
                                </div>
        `,
    },
    {
        nameOfTemplate: 'vCard',
        title: '2. Add content to the VCard QR code',
        mainContent: `
        <div class="preview-box-inside__content-container v-card">
            <img src="${vCard}" alt="vCard">
        </div>
        `,
    },
    {
        nameOfTemplate: 'SimpleText',
        title: '2. Add content to the Simple Text QR code',
        mainContent: `
        <div class="preview-box-inside__content-container">
            <p class="preview-box-inside__content-text">
                Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration; but this prescription is not consistently followed, even by most health care providers, because the term respiratory rate (RR) is a well-established term in health care, even though it would need to be consistently replaced with ventilation rate if the precise usage were to be followed.
            </p>
        </div>
        `,
    },
    {
        nameOfTemplate: 'Email',
        title: '2. Add content to the Email QR code',
        mainContent: `
        <div class="preview-box-inside__content-container">
            <img src="${eMail}" alt="eMail">
        </div>
        `,
    },
    {
        nameOfTemplate: 'SMS',
        title: '2. Add content to the SMS QR code',
        mainContent: `
        <div class="preview-box-inside__content-container">
            <img class="preview-box-inside__content-img-sms" src="${sms}" alt="sms">
        </div>
        `,
    },
    {
        nameOfTemplate: 'Calendar',
        title: '2. Add content to the Calendar QR code',
        mainContent: `
        <div class="preview-box-inside__content-container">
            <img class="preview-box-inside__content-img-calendar" src="${imgCalendar}" alt="calendar">
        </div>
        `,
    },
    {
        nameOfTemplate: 'Geolocation',
        title: '2. Add content to the Geolocation QR code',
        mainContent: `
        <div class="preview-box-inside__content-container">
            <img class="preview-box-inside__content" src="${location}" alt="location">
        </div>
        `,
    },
    {
        nameOfTemplate: 'PhoneNumber',
        title: '2. Add content to the Phone Number QR code',
        mainContent: `
        <div class="preview-box-inside__content-container">
            <img class="preview-box-inside__content" src="${number}" alt="number">
        </div>
        `,
    },
    {
        nameOfTemplate: 'customize',
        title: '3. Customize QR design',
        mainContent: `
        <div class="preview-box-inside__content-container">
            <p class="preview-box-inside__content-text">
                Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration; but this prescription is not consistently followed, even by most health care providers, because the term respiratory rate (RR) is a well-established term in health care, even though it would need to be consistently replaced with ventilation rate if the precise usage were to be followed.
            </p>
        </div>
        `,
    },
];
