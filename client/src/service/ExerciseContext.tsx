import React, {
	createContext,
	useContext,
	useState,
	useCallback,
	ReactNode,
} from "react";

interface IExerciseContext {
	currentIndex: number;
	setCurrentIndex: (value: number) => void;
	typingSpeed: number;
	setTypingSpeed: (value: number) => void;
	errorsCount: number;
	setErrorsCount: (value: number) => void;
	isExerciseCompleted: boolean;
	setIsExerciseCompleted: (value: boolean) => void;
	resetExercise: () => void;
}

export const ExerciseContext = createContext<IExerciseContext>({
	currentIndex: 0,
	setCurrentIndex: () => {},
	typingSpeed: 0,
	setTypingSpeed: () => {},
	errorsCount: 0,
	setErrorsCount: () => {},
	isExerciseCompleted: false,
	setIsExerciseCompleted: () => {},
	resetExercise: () => {},
});

export const useExerciseContext = () => useContext(ExerciseContext);

export const ExerciseProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [typingSpeed, setTypingSpeed] = useState(0);
	const [errorsCount, setErrorsCount] = useState(0);
	const [isExerciseCompleted, setIsExerciseCompleted] = useState(false);

	const resetExercise = useCallback(() => {
		setCurrentIndex(0);
		setErrorsCount(0);
		setTypingSpeed(0);
		setIsExerciseCompleted(false);
	}, []);

	return (
		<ExerciseContext.Provider
			value={{
				currentIndex,
				setCurrentIndex,
				typingSpeed,
				setTypingSpeed,
				errorsCount,
				setErrorsCount,
				isExerciseCompleted,
				setIsExerciseCompleted,
				resetExercise,
			}}
		>
			{children}
		</ExerciseContext.Provider>
	);
};
