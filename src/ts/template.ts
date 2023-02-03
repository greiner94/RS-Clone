export default function template() {
  interface Module {
    default: string;
  }

  const footerTemplate = require('../templates/footer.html') as Module;
  const footerOnPage = document.querySelector('#footer') as Element;

  const headerTemplate = require('../templates/header.html') as Module;
  const headerOnPage = document.querySelector('#header') as Element;

  if (footerOnPage) {
    footerOnPage.insertAdjacentHTML('beforebegin', footerTemplate.default);
    footerOnPage.remove();
  }

  if (headerOnPage) {
    headerOnPage.insertAdjacentHTML('beforebegin', headerTemplate.default);
    headerOnPage.remove();
  }
}