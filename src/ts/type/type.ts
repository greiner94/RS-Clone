interface InputData {
    type: string;
    inputName: string;
    placeholder: string;
    bigsize: boolean;
    list?: string[];
}

export interface BlockInputData {
    blockName: string;
    desc: string;
    svgArr?: string[];
    content: InputData[];
}

export interface InputDataUrl {
    [key: string]: BlockInputData[];
}

export type qrTypes =
    | 'WebsiteURL'
    | 'Wi-Fi'
    | 'vCard'
    | 'SimpleText'
    | 'Email'
    | 'SMS'
    | 'Calendar'
    | 'Geolocation'
    | 'PhoneNumber';
