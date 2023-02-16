export default function getQrStyles() {
    const location = window.location.hash;
    if (!location.includes('customize')) return;

    const stylesObject: {
        bgColor?: string;
        width?: number;
        correctionLevel?: 'L' | 'M' | 'H' | 'Q';
    } = {};
    //////// QR size
    const [sizeElem, correctionElem] = document.querySelectorAll('.select') as NodeListOf<HTMLSelectElement>;
    switch (sizeElem.value) {
        case 'Small':
            stylesObject.width = 80;
            break;
        case 'Medium':
            stylesObject.width = 150;
            break;
        default:
            stylesObject.width = 220;
    }
    //---// correction
    switch (correctionElem.value) {
        case 'Level M 15%':
            stylesObject.correctionLevel = 'M';
            break;
        case 'Level Q 25%':
            stylesObject.correctionLevel = 'Q';
            break;
        case 'Level H 30%':
            stylesObject.correctionLevel = 'H';
            break;
        default:
            stylesObject.correctionLevel = 'L';
    }
    //////// QR bgColor
    const bgColorElem = document.querySelector('#backgroundcolor') as HTMLInputElement;
    if (bgColorElem.value) {
        stylesObject.bgColor = bgColorElem.value;
    }
    //////// transparent
    const transparentElem = document.querySelector('#transparentbackground') as HTMLInputElement;
    if (transparentElem.checked) {
        stylesObject.bgColor = '#0000';
    }

    return stylesObject;
}
