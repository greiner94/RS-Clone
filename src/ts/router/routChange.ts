import renderNewPage from './renderNewPage';

export default function routeChange() {
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.slice(1);
        console.log({ hash });

        renderNewPage(hash);
    });
}
