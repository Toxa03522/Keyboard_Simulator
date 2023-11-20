import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
		size?: "block" | "responsive" | "miniblock";
		variant?: "standart" | "modal";
	}
