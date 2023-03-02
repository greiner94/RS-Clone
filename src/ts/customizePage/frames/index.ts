import frameColor from './frameColor';
import frameText from './frameText';
import frameTextColor from './frameTextColor';
import { frameType } from './frameType';
import inputColorBehaviour from './inputColorBehaviour';

export default function frames() {
    inputColorBehaviour();
    frameType();
    frameText();
    frameColor();
    frameTextColor();
}
