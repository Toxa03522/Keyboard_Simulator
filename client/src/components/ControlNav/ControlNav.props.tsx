import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ControlNavProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	text: string;
	setCurrentIndex: (value: number) => void;
	setErrorsCount: (value: number) => void;
	setTypingSpeed: (value: number) => void;
	isExerciseCompleted: boolean;
	setIsExerciseCompleted: (value: boolean) => void;
	setIsKeyboardVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
