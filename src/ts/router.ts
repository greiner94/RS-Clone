import functions from "./";

const listOfPages = ['404', '/', 'stage-1', 'stage-2', 'stage-3'];

export default function router() {
  const route = (event: Event) => {
    const target = event.target as HTMLAnchorElement;
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", target.href);
    handleLocation();
  };

  function getPagePath(listOfPages: string[], pathFromUrl: string) {
    if (pathFromUrl.length === 1 || pathFromUrl.includes('index')) {
      return './';
    } else if (listOfPages.includes(pathFromUrl.slice(1, -5))) {
      return `.${pathFromUrl}`;
    } else {
      return './404.html';
    }
  }

  const handleLocation = async () => {
    const path = window.location.pathname;
    const pagePath = getPagePath(listOfPages, path);
    const html = await fetch(pagePath)
    .then((data) => data.text())
    .then((html) => new DOMParser().parseFromString(html, 'text/html'));
  
    const body = document.querySelector("body") as HTMLElement;
    body.innerHTML = html.body.innerHTML;
  
    const linksList = document.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>;
    linksList.forEach((link) => link.addEventListener('click', route));
    functions();
  };
  
  window.addEventListener('popstate', handleLocation)
  handleLocation();
}