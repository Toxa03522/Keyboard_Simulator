import { CustomizingProps } from './Customizing.props';

import styles from './Customizing.module.scss';
import Button from '../Button/Button';

const Customizing = ({ handleReset, handleKeyboardToggle }: CustomizingProps) => (
    <div className="styles.customizing">
        <Button position='standart' size='middle' variant="ghost" onClick={handleReset}>Начать сначала</Button>
        <Button position='standart' size='middle' variant="ghost" onClick={handleKeyboardToggle}>Клавиатура</Button>
    </div>
);

export default Customizing;
