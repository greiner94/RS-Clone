export default function addListenersForLinks (){
    document.querySelector('.main__list')?.addEventListener('mouseover', (e) => {
        console.log((e.target as HTMLElement).classList.contains(''));
         if ((e.target as HTMLElement).classList.contains('website-url')) {
            (document.querySelector('.preview-box-inside__content-container.website-url')as HTMLElement).style.marginBottom = '0px';
         }
         if ((e.target as HTMLElement).classList.contains('wi-fi')) {
            (document.querySelector('.preview-box-inside__content-container.website-url')as HTMLElement).style.marginBottom = '-167%';
         }
         if ((e.target as HTMLElement).classList.contains('vcard')) {
            (document.querySelector('.preview-box-inside__content-container.website-url')as HTMLElement).style.marginBottom = '-334%';
         }
         if ((e.target as HTMLElement).classList.contains('simple-text')) {
            (document.querySelector('.preview-box-inside__content-container.website-url')as HTMLElement).style.marginBottom = '-501%';
         }
         if ((e.target as HTMLElement).classList.contains('email')) {
            (document.querySelector('.preview-box-inside__content-container.website-url')as HTMLElement).style.marginBottom = '-668%';
         }
         if ((e.target as HTMLElement).classList.contains('sms')) {
            (document.querySelector('.preview-box-inside__content-container.website-url')as HTMLElement).style.marginBottom = '-835%';
         }
         if ((e.target as HTMLElement).classList.contains('calendar')) {
            (document.querySelector('.preview-box-inside__content-container.website-url')as HTMLElement).style.marginBottom = '-1001%';
         }
         if ((e.target as HTMLElement).classList.contains('geolocation')) {
            (document.querySelector('.preview-box-inside__content-container.website-url')as HTMLElement).style.marginBottom = '-1168%';
         }
         if ((e.target as HTMLElement).classList.contains('phone-number')) {
            (document.querySelector('.preview-box-inside__content-container.website-url')as HTMLElement).style.marginBottom = '-1335%';
         }
    })
}