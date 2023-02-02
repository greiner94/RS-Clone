import MainPage from "./pages/MainPage";

export default class App{
    private container = document.querySelector('body') as HTMLElement;
    run(){
        const mainPage = new MainPage().render();
        this.container.innerHTML = mainPage;
    }
}