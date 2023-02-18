export default function calendar() {
    const eventnameElem = document.querySelector('#eventname') as HTMLTextAreaElement;
    const starCalendartElem = document.querySelector('#startdate') as HTMLInputElement;
    const endCalendarElem = document.querySelector('#finishdate') as HTMLInputElement;
    const isValidArr = [];

    allDaySwitcer();

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

    if (!starCalendartElem.value) {
        starCalendartElem.classList.add('invalid-input');
        isValidArr.push(false);
    } else {
        starCalendartElem.classList.remove('invalid-input');
        isValidArr.push(true);
    }

    if (!endCalendarElem.value || starCalendartElem.valueAsNumber > endCalendarElem.valueAsNumber) {
        endCalendarElem.classList.add('invalid-input');
        isValidArr.push(false);
    } else {
        endCalendarElem.classList.remove('invalid-input');
        isValidArr.push(true);
    }

    if (!starCalendartElem.value || starCalendartElem.valueAsNumber > endCalendarElem.valueAsNumber) {
        starCalendartElem.classList.add('invalid-input');
        isValidArr.push(false);
    } else {
        starCalendartElem.classList.remove('invalid-input');
        isValidArr.push(true);
    }
    return isValidArr.every((stutus) => stutus);
}

function allDaySwitcer() {
    const startCalendarElem = document.querySelector('#startdate') as HTMLInputElement;
    const endCalendarElem = document.querySelector('#finishdate') as HTMLInputElement;
    const alldayElem = document.querySelector('#allday') as HTMLInputElement;
    if (!startCalendarElem.value || !endCalendarElem.value) return;
    if (alldayElem.checked) {
        const startCalendartValue = startCalendarElem.value.slice(0, 10);
        const endCalendartValue = endCalendarElem.value.slice(0, 10);

        startCalendarElem.setAttribute('type', 'date');
        endCalendarElem.setAttribute('type', 'date');

        startCalendarElem.value = startCalendartValue;
        endCalendarElem.value = endCalendartValue;
    } else {
        const startCalendartValue =
            startCalendarElem.value.length < 11 ? startCalendarElem.value + 'T10:00' : startCalendarElem.value;
        const endCalendartValue =
            endCalendarElem.value.length < 11 ? endCalendarElem.value + 'T11:00' : endCalendarElem.value;

        startCalendarElem.setAttribute('type', 'datetime-local');
        endCalendarElem.setAttribute('type', 'datetime-local');

        startCalendarElem.value = startCalendartValue;
        endCalendarElem.value = endCalendartValue;
    }
}
