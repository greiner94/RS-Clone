export default function calendar() {
    const eventNameElem = document.querySelector('#eventname') as HTMLTextAreaElement;
    const startCalendartElem = document.querySelector('#startdate') as HTMLInputElement;
    const endCalendarElem = document.querySelector('#finishdate') as HTMLInputElement;
    const locationElem = document.querySelector('#location') as HTMLSelectElement;
    const eventDescriptionElem = document.querySelector('#eventdescription') as HTMLInputElement;
    const alldayElem = document.querySelector('#allday') as HTMLInputElement;

    const startDate = new Date(startCalendartElem.valueAsNumber);
    const endDate = new Date(endCalendarElem.valueAsNumber);
    const timeZoneCorrection = startDate.getTimezoneOffset() / 60;

    function addZeros(num: number) {
        if (num < 10) {
            return '0' + num;
        } else {
            return num.toString();
        }
    }

    const startDateString = `${startDate.getFullYear()}${addZeros(startDate.getMonth() + 1)}${addZeros(
        startDate.getDate()
    )}`;

    const startTimeString = `${addZeros(startDate.getUTCHours() + timeZoneCorrection)}${addZeros(
        startDate.getUTCMinutes()
    )}`;

    const endDateString = `${endDate.getFullYear()}${addZeros(endDate.getMonth() + 1)}${addZeros(endDate.getDate())}`;
    const endTimeString = `${addZeros(endDate.getUTCHours() + timeZoneCorrection)}${addZeros(endDate.getUTCMinutes())}`;

    const dtstart = alldayElem.checked
        ? `DTSTART;VALUE=DATE:${startDateString}`
        : `DTSTART:${startDateString}T${startTimeString}00Z`;
    const dtend = alldayElem.checked
        ? `DTEND;VALUE=DATE:${endDateString}`
        : `DTEND:${endDateString}T${endTimeString}00Z`;

    return `
BEGIN:VEVENT
SUMMARY:${eventNameElem.value}
${dtstart}
${dtend}
LOCATION:${locationElem.value}
DESCRIPTION:${eventDescriptionElem.value}
END:VEVENT
`;
}
