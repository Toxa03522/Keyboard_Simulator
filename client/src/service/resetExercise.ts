import { useCallback } from 'react';

export const useResetExercise = (
  setCurrentIndex: (value: number) => void,
  setErrorsCount: (value: number) => void,
  setTypingSpeed: (value: number) => void,
  setIsExerciseCompleted: (value: boolean) => void
) => {
  return useCallback(() => {
    setCurrentIndex(0);
    setErrorsCount(0);
    setTypingSpeed(0);
    setIsExerciseCompleted(false);
  }, [setCurrentIndex, setErrorsCount, setTypingSpeed, setIsExerciseCompleted]);
};
