import { NewBlockInputData } from '../../../ts/type/type';

const CALENDAR: NewBlockInputData[] = [
    {
        data: [
            {
                blockName: '',
                desc: '',
                content: [
                    {
                        type: 'text',
                        inputName: 'Name your QR code',
                        placeholder: 'e.g. Your first QR code',
                        bigsize: false,
                        require: true,
                    },
                ],
            },
        ],
    },
    {
        bigBlockName: 'Calendar',
        bigBlockDesc: 'Specify the date of the event to quickly add to the calendar',
        hide: true,
        data: [
            {
                blockName: '',
                desc: '',
                content: [
                    {
                        type: 'text',
                        inputName: 'Event name',
                        placeholder: 'e.g. Your event',
                        bigsize: false,
                        require: true,
                    },
                    {
                        type: 'text',
                        inputName: 'Location',
                        placeholder: '',
                        bigsize: false,
                        require: false,
                    },
                    {
                        type: 'datetime-local',
                        inputName: 'Start date',
                        placeholder: '',
                        bigsize: false,
                        require: true,
                    },
                    {
                        type: 'datetime-local',
                        inputName: 'Finish date',
                        placeholder: '',
                        bigsize: false,
                        require: false,
                    },
                    {
                        type: 'checkbox',
                        inputName: 'All day',
                        placeholder: '',
                        bigsize: false,
                        require: false,
                    },
                    {
                        type: 'text',
                        inputName: 'Event description',
                        placeholder: '',
                        bigsize: true,
                        require: false,
                    },
                ],
            },
        ],
    },
];

export default CALENDAR;
