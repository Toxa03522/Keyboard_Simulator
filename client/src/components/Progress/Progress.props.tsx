import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProgressProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
		text: string;
	}
