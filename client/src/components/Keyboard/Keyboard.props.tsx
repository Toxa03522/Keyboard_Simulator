import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface KeyboardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
		text: string;
		isVisible: boolean;
	}
