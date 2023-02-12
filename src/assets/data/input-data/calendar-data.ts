import { BlockInputData } from '../../../ts/type/type';

const CALENDAR: BlockInputData[] = [
    {
        blockName: 'Calendar',
        desc: 'Specify the date of the event to quickly add to the calendar',
        content: [
            {
                type: 'text',
                inputName: 'Event name',
                placeholder: 'e.g. Your event',
                bigsize: false,
            },
            {
                type: 'text',
                inputName: 'Location',
                placeholder: '',
                bigsize: false,
            },
            {
                type: 'datetime-local',
                inputName: 'Start date',
                placeholder: '',
                bigsize: false,
            },
            {
                type: 'datetime-local',
                inputName: 'Finish date',
                placeholder: '',
                bigsize: false,
            },
            {
                type: 'checkbox',
                inputName: 'All day',
                placeholder: '',
                bigsize: false,
            },
            {
                type: 'text',
                inputName: 'Event description',
                placeholder: '',
                bigsize: true,
            },
        ],
    },
];

export default CALENDAR;
