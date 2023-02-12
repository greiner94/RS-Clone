import { BlockInputData } from '../../type/type';

function inputConstructor(inputData: BlockInputData[]): DocumentFragment {
    const fragmentInput = <DocumentFragment>document.createDocumentFragment();
    const inputBlockEl = <HTMLFormElement>document.createElement('form');

    inputData.forEach((inputBlock) => {
        const h3 = <HTMLElement>document.createElement('h3');
        const desc = <HTMLElement>document.createElement('p');
        const allInputWrapper = <HTMLElement>document.createElement('div');
        h3.textContent = inputBlock.blockName;
        desc.textContent = inputBlock.desc;
        h3.className = 'input-block__h3';
        allInputWrapper.className = 'all-input-wrapper';
        const inputArrLength = inputBlock.content.length;
        const isEvenLength = inputArrLength % 2 === 0;

        inputBlock.content.forEach(({ type, inputName, placeholder, bigsize, list = [] }, ind) => {
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
            allInputWrapper.append(inputWrapper);
        });
        inputBlockEl.append(h3, desc, allInputWrapper);
        if (typeof inputBlock.svgArr !== 'undefined') {
            desc.after(getIconBlock(inputBlock.svgArr));
        }
        fragmentInput.append(inputBlockEl);
    });
    inputBlockEl.className = 'input-block';
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
    div.className = 'icon-block';
    svgArr.forEach((icon) => {
        const innerDiv = <HTMLElement>document.createElement('div');
        innerDiv.className = 'frame-wrapper';
        innerDiv.innerHTML = icon;
        div.append(innerDiv);
    });
    fragmentIcon.append(div);
    return fragmentIcon;
}

export default inputConstructor;
