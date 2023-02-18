interface InputData {
    type: string;
    inputName: string;
    require: boolean;
    placeholder: string;
    bigsize: boolean;
    list?: string[];
}

export interface BlockInputData {
    blockName: string;
    desc: string;
    svgArr?: string[];
    type?: string;
    content?: InputData[];
}
export interface NewBlockInputData {
    bigBlockName?: string;
    bigBlockDesc?: string;
    hide?: boolean;
    data: BlockInputData[];
    type?: string;
}

export interface StagePage {
    [key: string]: number;
}
export interface InputDataUrl {
    [key: string]: NewBlockInputData[];
}

export enum LSParam {
    templatePage = 'page',
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

export interface QrCodeData {
    userId: string;
    type: string;
    descr: string;
    fileName: string;
    id: number;
}

export interface ModalData {
    h3: string;
    desc: string;
    content: string;
}
