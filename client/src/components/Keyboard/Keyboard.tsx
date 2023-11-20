import { KeyboardProps } from './Keyboard.props';
import useKeyPress from '../../service/useKeyPress';

import cn from 'classnames';
import styles from './Keyboard.module.scss';

import Card from '../Card/Card';

const Keyboard = ({ className, text, isVisible, ...props }: KeyboardProps): JSX.Element | null => {
    const { currentIndex } = useKeyPress(text);
    
    const rows = [
        ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
        ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '|'],
        ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
        ['Shift-L', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift-R'],
        [' ']
    ];
    
    return isVisible ? (
        <Card
            className={cn(styles.keyboard, className)}
            {...props}
        >
            {rows.map((row, rowIndex) => (
                <div className={styles.wrapper} key={`row-${rowIndex}`}>
                    {row.map((key) => (
                        <div className={cn(styles.key, {[styles.active]: key === text[currentIndex]})} key={key}>{key}</div>
                    ))}
                </div>
            ))}
        </Card>
    ) : null;
};

export default Keyboard;
