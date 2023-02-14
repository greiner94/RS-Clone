export default function logos() {
    const logos = document.querySelectorAll('.all-input-wrapper .frame-wrapper') as NodeListOf<HTMLElement>;
    logos.forEach((logo) => {
        logo.addEventListener('click', () => {
            logos.forEach((logo) => logo.classList.remove('active'));
            logo.classList.add('active');
        });
    });
}
