import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getTextForExercise } from '@/service/Requests';
import useKeyPress from '@/service/useKeyPress';
import { useExerciseContext } from '@/service/ExerciseContext';

import Title from '@/components/Title/Title';
import ControlNav from '@/components/ControlNav/ControlNav';
import Progress from '@/components/Progress/Progress';
import Keyboard from '@/components/Keyboard/Keyboard';
import ResultModal from '@/components/ResultModal/ResultModal';

const Exercise = () => {
    const router = useRouter();
    const { lessonId, exerciseId } = router.query;
    const text = getTextForExercise(Number(exerciseId));
    const { currentIndex, typingSpeed, errorsCount } = useKeyPress(text);
    const { setCurrentIndex, setErrorsCount, setTypingSpeed, isExerciseCompleted, setIsExerciseCompleted } = useExerciseContext();
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(true);

    useEffect(() => {
        const handleFocus = (event: FocusEvent) => {
            if (event.target instanceof HTMLElement) {
                event.target.blur();
            }
        };

        window.addEventListener('focus', handleFocus, true);

        return () => {
            window.removeEventListener('focus', handleFocus, true);
        };
    }, []);

    return (
        <section>
            <Title type='h1' position='center'>Номер урока - {lessonId}. Номер упражнения - {exerciseId}.</Title>
            <div key={String(exerciseId)}>
                <ControlNav
                    text={text}
                    setCurrentIndex={setCurrentIndex}
                    setErrorsCount={setErrorsCount}
                    setTypingSpeed={setTypingSpeed}
                    isExerciseCompleted={isExerciseCompleted}
                    setIsExerciseCompleted={setIsExerciseCompleted}
                    setIsKeyboardVisible={setIsKeyboardVisible}
                />
                <Progress text={text} />
                <Keyboard text={text} isVisible={isKeyboardVisible} />
            </div>
            {currentIndex === text.length && (
                <ResultModal
                    errorsCount={errorsCount}
                    typingSpeed={typingSpeed}
                    setCurrentIndex={setCurrentIndex}
                    setErrorsCount={setErrorsCount}
                    setTypingSpeed={setTypingSpeed}
                    isExerciseCompleted={isExerciseCompleted}
                    setIsExerciseCompleted={setIsExerciseCompleted}
                />
            )}
        </section>
    );
};

export default Exercise;