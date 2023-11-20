import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ResultModalProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	errorsCount: number;
	typingSpeed: number;
	setCurrentIndex: (value: number) => void;
	setErrorsCount: (value: number) => void;
	setTypingSpeed: (value: number) => void;
	isExerciseCompleted: boolean;
  	setIsExerciseCompleted: (value: boolean) => void;
}
