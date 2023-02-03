import functions from "./";

export default function router() {
  const route = (event: Event) => {
    const target = event.target as HTMLAnchorElement;
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", target.href);
    handleLocation();
  };
  interface Routes {
    [key: string]: string;
  }
  const routes: Routes = {
    '/404.html': "./404.html",
    "/": "./index.html",
    "/stage-1.html": "./stage-1.html",
    "/stage-2.html": "./stage-2.html",
    "/stage-3.html": "./stage-3.html",
  };

  const handleLocation = async () => {
    const path = window.location.pathname;
    const pagePath = routes[path] || routes['404'];
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