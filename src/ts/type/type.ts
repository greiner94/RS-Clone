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
    content?: InputData[];
}
export interface NewBlockInputData {
    bigBlockName?: string;
    bigBlockDesc?: string;
    hide?: boolean;
    data: BlockInputData[];
}

export interface StagePage {
    [key: string]: number;
}
export interface InputDataUrl {
    [key: string]: NewBlockInputData[];
}
