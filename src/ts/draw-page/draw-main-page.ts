import Breadcrumbs from '../../assets/data/breadcrumbs';
import MainPageBtn from '../../assets/data/main-page-btn';
import { drawSmartphoneBlock } from './drawWebsiteTemplatesPage';

export function drawMainPage() {
    const fragmentStartPage = <DocumentFragment>document.createDocumentFragment();
    const allWrapper = <HTMLDivElement>document.createElement('div');
    // const headerBlock = <HTMLElement>document.createElement('header');
    // const mainBlock = <HTMLElement>document.createElement('main');
    const breadcrumbsBlock = <HTMLElement>document.createElement('div');
    const contentWrap = <HTMLElement>document.createElement('div');
    const mainContent = <HTMLElement>document.createElement('div');
    const smartphoneBlock = <HTMLElement>document.createElement('div');
    const container = <HTMLElement>document.createElement('div');
    // const footerBlock = <HTMLElement>document.createElement('footer');
    allWrapper.className = 'all-wrapper';
    container.className = 'container';
    // headerBlock.className = 'header';
    // mainBlock.className = 'main';
    breadcrumbsBlock.className = 'breadcrumbs';
    contentWrap.className = 'main__content-wrap';
    mainContent.className = 'main__content';
    smartphoneBlock.className = 'smartphone';
    // footerBlock.className = 'footer';
    // drawHeaderBlock(headerBlock);
    breadcrumbsBlock.append(drawBreadcrumbs());
    drawMainContent(mainContent);
    drawSmartphoneBlock(smartphoneBlock, '', true);
    // drawFooterBlock(footerBlock);
    // contentWrap.append(mainContent, smartphoneBlock);
    // mainBlock.append(breadcrumbsBlock, contentWrap);
    contentWrap.append(mainContent, smartphoneBlock);
    // allWrapper.append(mainBlock);
    container.append(breadcrumbsBlock, contentWrap);
    fragmentStartPage.append(container);
    // document.body.append(fragmentStartPage);
    return fragmentStartPage;
}

export function drawBreadcrumbs(): DocumentFragment {
    const fragmentBreadcrumbs = <DocumentFragment>document.createDocumentFragment();
    const ol = document.createElement('ol');
    const length = Breadcrumbs.length;
    for (let i = 0; i < length; i += 1) {
        const li = document.createElement('li');
        li.className = 'breadcrumbs__item';
        li.dataset.stage = `${i + 1}`;
        li.textContent = Breadcrumbs[i];
        ol.append(li);
    }
    ol.className = 'breadcrumbs__list';
    fragmentBreadcrumbs.append(ol);
    return fragmentBreadcrumbs;
}

export function drawMainContent(parentElement: HTMLElement): void {
    const fragmentMainContent = <DocumentFragment>document.createDocumentFragment();
    const ul = <HTMLUListElement>document.createElement('ul');
    const length = MainPageBtn.length;
    for (let i = 0; i < length; i += 1) {
        const li = <HTMLLIElement>document.createElement('li');
        const a = (document.createElement('a') as unknown) as HTMLLinkElement;
        a.href = `#templates/${MainPageBtn[i].text.split(' ').join('')}`;
        a.classList.add(`${MainPageBtn[i].text.toLowerCase().split(' ').join('-')}`, 'templates');
        const wrapTextCont = <HTMLDivElement>document.createElement('div');
        wrapTextCont.className = `main__wrap-text`;
        li.className = 'main__btn-block';
        li.innerHTML = `<span class="main__svg-icon">${MainPageBtn[i].svg}</span>`;
        wrapTextCont.innerHTML = `<p class="main__btn-name">${MainPageBtn[i].text}</p>
                                   <p class="main__btn-desc">${MainPageBtn[i].desc}</p>`;

        li.append(wrapTextCont);
        a.append(li);
        ul.append(a);
    }
    ul.className = 'main__list';
    fragmentMainContent.append(ul);
    parentElement.append(fragmentMainContent);
}
