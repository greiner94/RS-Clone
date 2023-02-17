import { ModalData } from '../type/type';

function drawModalWindow(modalData: ModalData, url: string): void {
    const main = <HTMLElement>document.querySelector('main');
    const blackout = <HTMLElement>document.createElement('div');
    const modalFragment = <DocumentFragment>document.createDocumentFragment();
    const modalWrap = <HTMLElement>document.createElement('div');
    const closeBtn = <HTMLElement>document.createElement('div');
    const header = <HTMLElement>document.createElement('h3');
    const desc = <HTMLElement>document.createElement('p');
    const content = <HTMLElement>document.createElement('div');
    modalWrap.className = 'modal';
    blackout.className = 'blackout';
    closeBtn.className = 'modal__close';
    header.className = 'modal__h3';
    desc.className = 'modal__desc';
    content.className = 'modal__content-wrap';
    header.textContent = modalData.h3;
    desc.textContent = modalData.desc;
    content.innerHTML = modalData.content.replace('**', url);
    closeBtn.textContent = 'Close';
    closeBtn.addEventListener('click', closeModal);
    modalWrap.append(closeBtn, header, desc, content);
    modalFragment.append(modalWrap, blackout);
    main.append(modalFragment);
}

function closeModal() {
    console.log('close window');
    const modalWrap = <HTMLElement>document.querySelector('.modal');
    const blackout = <HTMLElement>document.querySelector('.blackout');
    modalWrap.remove();
    blackout.remove();
}
export default drawModalWindow;
