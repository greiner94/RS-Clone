import { hideBlockInput } from '../../state-element';
import { NewBlockInputData } from '../../type/type';

function inputConstructor(inputData: NewBlockInputData[]): DocumentFragment {
    const fragmentInput = <DocumentFragment>document.createDocumentFragment();
    console.log('inputData', inputData);
    inputData.forEach((data) => {
        const inputBlockEl = <HTMLDivElement>document.createElement('div');
        const inputBlocksWrapper = <HTMLElement>document.createElement('div');
        inputBlockEl.className = 'input-block';
        inputBlocksWrapper.className = 'input-bigblock-wrapper';
        if (data.bigBlockName) {
            const headerWrapper = <HTMLElement>document.createElement('div');
            const h3 = <HTMLElement>document.createElement('h3');
            const bigDesc = <HTMLElement>document.createElement('p');

            h3.textContent = data.bigBlockName || '';
            bigDesc.textContent = data.bigBlockDesc || '';

            headerWrapper.className = 'hide-block';
            h3.className = 'hide-block__h3';
            bigDesc.className = 'hide-block__desc';
            headerWrapper.append(h3, bigDesc);
            inputBlockEl.append(headerWrapper);
            if (data.hide === true) {
                const spanArrow = <HTMLElement>document.createElement('span');
                spanArrow.className = 'hide-block__arrow';
                headerWrapper.append(spanArrow);
                ///////////////////////////////
                spanArrow.addEventListener('click', () => {
                    hideBlockInput(inputBlockEl);
                });
            }
        }
        inputBlockEl.append(inputBlocksWrapper);
        data.data.forEach((inputBlock) => {
            const h4 = <HTMLElement>document.createElement('h4');
            const desc = <HTMLElement>document.createElement('p');

            h4.textContent = inputBlock.blockName;
            desc.textContent = inputBlock.desc;
            h4.className = 'input-block__h4';
            desc.className = 'input-block__desc';
            inputBlocksWrapper.append(h4, desc);
            const inputArrLength: number = inputBlock.content?.length || 0;
            const isEvenLength = inputArrLength % 2 === 0;
            const allInputWrapper = <HTMLElement>document.createElement('div');
            allInputWrapper.className = 'all-input-wrapper';

            if (inputArrLength > 0) {
                inputBlock.content?.forEach(({ type, inputName, placeholder, bigsize, require, list = [] }, ind) => {
                    const inputWrapper = <HTMLDivElement>document.createElement('div');
                    const name = inputName.replace(/ /g, '').toLowerCase();
                    const label = <HTMLLabelElement>document.createElement('label');
                    inputWrapper.className = 'input-wrapper';
                    label.className = 'input-name';
                    label.textContent = inputName;
                    label.setAttribute('for', name);
                    inputWrapper.append(label);

                    if (bigsize === true) {
                        inputWrapper.append(getTextarea(placeholder, name));
                    } else if (type === 'select') {
                        inputWrapper.append(getSelect(list));
                    } else if (type === 'color') {
                        inputWrapper.append(getColor(name, placeholder));
                    } else {
                        if (type === 'checkbox') {
                            label.className = 'checkbox-name';
                            inputWrapper.classList.add('checkbox-wrapper');
                        }
                        inputWrapper.append(getInput(type, placeholder, name, isEvenLength, ind, inputArrLength));
                    }
                    if (require === true) {
                        label.classList.add('label-require');
                    }

                    allInputWrapper.append(inputWrapper);
                });
                // inputBlockEl.append(allInputWrapper);
            }
            console.log('inputBlock.type', inputBlock.type);
            if (inputBlock.type === 'halfBlock' && typeof inputBlock.svgArr !== 'undefined') {
                allInputWrapper.append(getIconBlock(inputBlock.svgArr));
                inputBlocksWrapper.classList.add('flex');
                console.log('draw icon Block');
            }
            if (inputBlock.type === 'uploadBlock') {
                console.log('draw upload Block');
                allInputWrapper.append(getUploadLogo());
            }
            if (typeof inputBlock.svgArr !== 'undefined' && typeof inputBlock.type === 'undefined') {
                desc.after(getIconBlock(inputBlock.svgArr));
            }
            inputBlocksWrapper.append(allInputWrapper);
            fragmentInput.append(inputBlockEl);
        });
    });
    return fragmentInput;
}

function getTextarea(placeholder: string, name: string): HTMLTextAreaElement {
    const textarea = <HTMLTextAreaElement>document.createElement('textarea');
    textarea.className = 'textarea';
    textarea.id = name;
    textarea.placeholder = placeholder;
    textarea.rows = 4;
    textarea.maxLength = 200;
    return textarea;
}

function getInput(
    type: string,
    placeholder: string,
    name: string,
    isEvenLength: boolean,
    ind: number,
    inputArrLength: number
): HTMLInputElement {
    const input = <HTMLInputElement>document.createElement('input');
    input.className = 'input';
    input.id = name;
    input.type = type;
    input.placeholder = placeholder;
    if (!isEvenLength && ind === inputArrLength - 1) {
        input.dataset.bigsize = 'true';
    }
    return input;
}

function getSelect(list: string[]): HTMLElement {
    const selectWrap = <HTMLElement>document.createElement('div');
    const select = <HTMLElement>document.createElement('select');
    selectWrap.className = 'select-wrapper';
    select.className = 'select';
    list.forEach((el, ind) => {
        const option = <HTMLOptionElement>document.createElement('option');
        ind === 0 ? option.setAttribute('selected', 'true') : null;
        option.textContent = `⠀⠀${el}`;
        option.value = el;
        select.append(option);
    });
    const span = <HTMLElement>document.createElement('span');
    span.className = 'focus';
    selectWrap.append(select, span);
    return selectWrap;
}

function getColor(name: string, placeholder: string): DocumentFragment {
    const fragmentInputColor = <DocumentFragment>document.createDocumentFragment();
    const inputWrap = <HTMLElement>document.createElement('div');
    const input = <HTMLInputElement>document.createElement('input');
    const inputColor = <HTMLInputElement>document.createElement('input');
    inputWrap.className = 'input-color';
    input.className = 'input input-color__text';
    inputColor.className = 'input-color__color';
    input.id = name;
    input.type = 'text';
    inputColor.type = 'color';
    inputColor.value = placeholder;
    input.placeholder = placeholder;
    inputWrap.append(input, inputColor);
    fragmentInputColor.append(inputWrap);
    return fragmentInputColor;
}

function getIconBlock(svgArr: string[]): DocumentFragment {
    const fragmentIcon = <DocumentFragment>document.createDocumentFragment();
    const div = <HTMLElement>document.createElement('div');
    const logoWrap = <HTMLElement>document.createElement('div');
    div.className = 'icon-block';
    logoWrap.className = 'logo-wrapper';
    svgArr.forEach((icon) => {
        const innerDiv = <HTMLElement>document.createElement('div');
        innerDiv.className = 'frame-wrapper';
        innerDiv.innerHTML = icon;
        logoWrap.append(innerDiv);
    });
    div.append(logoWrap);
    fragmentIcon.append(div);
    // if (type === 'halfBlock') {
    //     div.classList.add('flex');
    //     logoWrap.classList.add('half');
    //     const uploadBlock = <HTMLElement>document.createElement('div');
    //     const h4 = <HTMLElement>document.createElement('h4');
    //     const nextDiv = <HTMLElement>document.createElement('div');
    //     const icon = <HTMLElement>document.createElement('div');
    //     const p = <HTMLElement>document.createElement('p');
    //     const desc = <HTMLElement>document.createElement('p');
    //     uploadBlock.className = 'upload-block';
    //     h4.className = 'input-block__h4';
    //     nextDiv.className = 'upload';
    //     icon.className = 'upload__icon';
    //     p.className = 'upload__name';
    //     desc.className = 'upload__desc';
    //     h4.textContent = 'Upload your own logo';
    //     p.textContent = 'Upload image (JPG, PNG, SVG)';
    //     desc.textContent = 'Maximum size 5 MB';
    //     nextDiv.append(icon, p, desc);
    //     uploadBlock.append(h4, nextDiv);
    //     div.append(uploadBlock);
    // }

    return fragmentIcon;
}
function getUploadLogo(): DocumentFragment {
    const fragmentUpload = <DocumentFragment>document.createDocumentFragment();
    const uploadBlock = <HTMLElement>document.createElement('div');
    //const h4 = <HTMLElement>document.createElement('h4');
    const nextDiv = <HTMLElement>document.createElement('div');
    const icon = <HTMLElement>document.createElement('div');
    const p = <HTMLElement>document.createElement('p');
    const desc = <HTMLElement>document.createElement('p');
    uploadBlock.className = 'upload-block';
    //h4.className = 'input-block__h4';
    nextDiv.className = 'upload';
    icon.className = 'upload__icon';
    p.className = 'upload__name';
    desc.className = 'upload__desc';
    //h4.textContent = 'Upload your own logo';
    p.textContent = 'Upload image (JPG, PNG, SVG)';
    desc.textContent = 'Maximum size 5 MB';
    nextDiv.append(icon, p, desc);
    uploadBlock.append(nextDiv);
    fragmentUpload.append(uploadBlock);
    return fragmentUpload;
}

export default inputConstructor;
