import logoImg from '../assets/images/icons/logo.svg';

export default function getHtmlOfHeader() {
    return `
        <header class="header">
            <a class="header__logo" href="./">
            <div class="header__logo-img">
                <img src="${logoImg}">
            </div>
            <div class="header__logo-title">
                <span>QR</span><span>Word</span>
            </div>
            </a>
        </header>    
    `;
}
