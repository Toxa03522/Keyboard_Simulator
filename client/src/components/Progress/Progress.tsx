import { useState, useEffect } from 'react';
import { ProgressProps } from './Progress.props';
import { useExerciseContext } from '../../service/ExerciseContext';

import cn from 'classnames';
import styles from './Progress.module.scss';

import Card from '../Card/Card';

const Progress = ({ className, text, ...props }: ProgressProps): JSX.Element => {
    const { currentIndex } = useExerciseContext();
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        if (currentIndex > typedText.length) {
            let newText = text.slice(0, currentIndex);
            while (newText.length > 37) {
                newText = newText.slice(1);
            }
            setTypedText(newText);
        }
    }, [currentIndex, text, typedText]);

    useEffect(() => {
        if (currentIndex === 0) {
            setTypedText('');
        }
    }, [currentIndex]);

    return (
        <div className={cn(styles.progress, className)} {...props}>
            <Card className={styles.item}>
                <p><span className={styles.textTyped}>{typedText}</span></p>
            </Card>
            <Card className={styles.item}>
                <p>
                    {text.slice(currentIndex).split('').map((char, index) => (
                        <span
                            key={index}
                            className={styles.textDefault}
                        >
                            {char}
                        </span>
                    ))}
                </p>
            </Card>
        </div>
    );
};

export default Progress;
