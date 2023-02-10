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
                type: 'checkbox',
                inputName: 'All day',
                placeholder: '',
                bigsize: false,
            },
            {
                type: 'date',
                inputName: 'Start date',
                placeholder: '',
                bigsize: false,
            },
            {
                type: 'text',
                inputName: 'Time',
                placeholder: '10:20',
                bigsize: false,
            },
            {
                type: 'date',
                inputName: 'Finish date',
                placeholder: '',
                bigsize: false,
            },
            {
                type: 'text',
                inputName: 'Time',
                placeholder: '12:00',
                bigsize: false,
            },
            {
                type: 'select',
                inputName: 'Timezone',
                placeholder: '',
                bigsize: false,
                list: [
                    'GMT GMT',
                    'GMT UTC',
                    'GMT+1:00 ECT',
                    'GMT+2:00 EET',
                    'GMT+2:00 ART',
                    'GMT+3:00 EAT',
                    'GMT+3:30 MET',
                    'GMT+4:00 NET',
                    'GMT+5:00 PLT',
                    'GMT+5:30 IST',
                    'GMT+6:00 BST',
                    'GMT+7:00 VST',
                    'GMT+8:00 CTT',
                    'GMT+9:00 JST',
                    'GMT+9:30 ACT',
                    'GMT+10:00 AET',
                    'GMT+11:00 SST',
                    'GMT+12:00 NST',
                    'GMT-11:00 MIT',
                    'GMT-10:00 HST',
                    'GMT-9:00 AST',
                    'GMT-8:00 PST',
                    'GMT-7:00 PNT',
                    'GMT-7:00 MST',
                    'GMT-6:00 CST',
                    'GMT-5:00 EST',
                    'GMT-5:00 IET',
                    'GMT-4:00 PRT',
                    'GMT-3:30 CNT',
                    'GMT-3:00 AGT',
                    'GMT-3:00 BET',
                    'GMT-1:00 CAT',
                ],
            },
            {
                type: 'checkbox',
                inputName: 'Summer time',
                placeholder: '',
                bigsize: false,
            },
            {
                type: 'text',
                inputName: 'Location',
                placeholder: '',
                bigsize: false,
            },
            {
                type: 'text',
                inputName: 'Event description',
                placeholder: '',
                bigsize: false,
            },
        ],
    },
];

export default CALENDAR;
