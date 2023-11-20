import { useState, useEffect, useCallback, useContext } from "react";
import { useExerciseContext } from './ExerciseContext';

const useKeyPress = (text: string) => {
    const { currentIndex, setCurrentIndex, typingSpeed, setTypingSpeed, errorsCount, setErrorsCount, isExerciseCompleted, setIsExerciseCompleted } = useExerciseContext();
    const [startTime, setStartTime] = useState<null | number>(null);

    const onKeyPress = useCallback(
        (event: KeyboardEvent) => {
            if (isExerciseCompleted) {
                return;
            }
            if (startTime === null) {
                setStartTime(Date.now());
            }
            if (event.key === text[currentIndex]) {
                setCurrentIndex(currentIndex + 1);
                const elapsedTime = startTime ? (Date.now() - startTime) / 60000 : 0;
                if (elapsedTime > 0) {
                    setTypingSpeed((currentIndex + 1) / elapsedTime);
                }
                if (currentIndex + 1 === text.length) {
                    setIsExerciseCompleted(true);
                }
            } else {
                setErrorsCount(errorsCount + 1);
            }
        },
        [currentIndex, text, startTime, errorsCount, setCurrentIndex, setErrorsCount, setIsExerciseCompleted, setTypingSpeed, isExerciseCompleted]
    );

    useEffect(() => {
        window.addEventListener("keypress", onKeyPress);
        return () => {
            window.removeEventListener("keypress", onKeyPress);
        };
    }, [onKeyPress]);

    return { 
        currentIndex, 
        typingSpeed, 
        errorsCount,
        isExerciseCompleted
    };
};

export default useKeyPress;

