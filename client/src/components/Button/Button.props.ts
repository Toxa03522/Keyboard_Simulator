import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	size?: "little" | "middle" | "big";
	variant?: "classic" | "outline" | "ghost" | "video";
	position?: "center" | "standart";
	children: ReactNode;
}