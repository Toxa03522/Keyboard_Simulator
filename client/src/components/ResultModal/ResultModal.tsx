import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { navigateToNextLesson } from '../../service/navigateToNextLesson';
import { ResultModalProps } from './ResultModal.props';
import { useResetExercise } from '../../service/resetExercise';

import cn from 'classnames';
import styles from './ResultModal.module.scss';

import Counter from '../Counter/Counter';
import Card from '../Card/Card';
import Title from '../Title/Title';
import Button from '../Button/Button';


const ResultModal = ({
    className,
    errorsCount,
    typingSpeed,
    setCurrentIndex,
    setErrorsCount,
    setTypingSpeed,
    isExerciseCompleted,
    setIsExerciseCompleted
}: ResultModalProps) => {
    const router = useRouter();

    const resetExercise = useResetExercise(setCurrentIndex, setErrorsCount, setTypingSpeed, setIsExerciseCompleted);

    const handleNextLesson = useCallback(() => {
        navigateToNextLesson(router);
        resetExercise();
    }, [router, resetExercise]);

    const handleRepeat = useCallback(() => {
        resetExercise();
    }, [resetExercise]);

    const handleClick = errorsCount < 3 ? handleNextLesson : handleRepeat;

    return (
        <aside className={cn(styles.modal, className)}>
            <Card variant='modal'>
                <Title type='h2' position='center'>Результаты</Title>
                <Counter typingSpeed={typingSpeed} errorsCount={errorsCount} />
                <div className={styles.buttons}>
                    {isExerciseCompleted && (
                        <Button position='standart' size="middle" onClick={handleClick}>
                            {errorsCount < 3 ? 'Следующий урок' : 'Повторить'}
                        </Button>
                    )}
                </div>
            </Card>
        </aside>
    );
};

export default ResultModal;