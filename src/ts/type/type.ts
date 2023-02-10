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
