export default function calendar() {
    const eventnameElem = document.querySelector('#eventname') as HTMLTextAreaElement;
    const starCalendartElem = document.querySelector('#startdate') as HTMLInputElement;
    const endCalendarElem = document.querySelector('#finishdate') as HTMLInputElement;
    const isValidArr = [];

    if (eventnameElem.value) {
        eventnameElem.classList.remove('invalid-input');
        isValidArr.push(true);
    } else {
        eventnameElem.classList.add('invalid-input');
        isValidArr.push(false);
    }

    if (isNaN(starCalendartElem.valueAsNumber) || isNaN(endCalendarElem.valueAsNumber)) {
        starCalendartElem.classList.add('invalid-input');
        endCalendarElem.classList.add('invalid-input');
        isValidArr.push(false);
    } else {
        starCalendartElem.classList.remove('invalid-input');
        endCalendarElem.classList.remove('invalid-input');
        isValidArr.push(true);
    }

    if (starCalendartElem.valueAsNumber > endCalendarElem.valueAsNumber) {
        starCalendartElem.classList.add('invalid-input');
        endCalendarElem.classList.add('invalid-input');
        isValidArr.push(false);
    } else {
        starCalendartElem.classList.remove('invalid-input');
        endCalendarElem.classList.remove('invalid-input');
        isValidArr.push(true);
    }

    return isValidArr.every((stutus) => stutus);
}
