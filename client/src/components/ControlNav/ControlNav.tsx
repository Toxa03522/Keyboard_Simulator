import { ControlNavProps } from './ControlNav.props';
import { useExerciseContext } from '../../service/ExerciseContext';
import { useResetExercise } from '../../service/resetExercise';

import cn from 'classnames';
import styles from './ControlNav.module.scss';

import Card from "../Card/Card";
import Counter from '../Counter/Counter';
import Customizing from '../Customizing/Customizing';

const ControlNav = ({
    className,
    text,
    setCurrentIndex,
    setErrorsCount,
    setTypingSpeed,
    isExerciseCompleted,
    setIsExerciseCompleted,
    setIsKeyboardVisible,
    ...props
}: ControlNavProps): JSX.Element => {
    const { typingSpeed, errorsCount } = useExerciseContext();
    const resetExercise = useResetExercise(setCurrentIndex, setErrorsCount, setTypingSpeed, setIsExerciseCompleted);
    const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
        resetExercise();
    };
    const handleKeyboardToggle = () => {
        setIsKeyboardVisible(prevIsKeyboardVisible => !prevIsKeyboardVisible);
    };

    return (
        <div
            className={cn(styles.controlNav, className)}
            {...props}
        >
            <Card size="responsive">
                <div className={styles.wrapper}>
                    <Counter typingSpeed={typingSpeed} errorsCount={errorsCount} />
                    <Customizing handleReset={handleReset} handleKeyboardToggle={handleKeyboardToggle} />
                </div>
            </Card>
        </div>
    );
};

export default ControlNav;
