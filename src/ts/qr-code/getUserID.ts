import { v4 as uuidv4 } from 'uuid';

export default function getUserID() {
    let userID: string;
    if (localStorage.getItem('userID')) {
        userID = localStorage.getItem('userID') || '';
    } else {
        userID = uuidv4();
        localStorage.setItem('userID', userID);
    }
    return userID;
}
