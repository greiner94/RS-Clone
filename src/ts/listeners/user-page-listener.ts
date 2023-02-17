export const tableListener = function (event: MouseEvent) {
    const target = event.target as SVGUseElement;
    const tableBtn = target.closest('.table__btn') as HTMLElement;
    const btnData = tableBtn.dataset.btn;
    switch (btnData) {
        case 'share':
            break;
        case 'download':
            break;
        case 'print':
            break;
        case 'delete':
            break;
    }
    console.log('btnData', btnData);
};
