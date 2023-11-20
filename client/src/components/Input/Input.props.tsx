import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    type: 'email' | 'password';
	label?: string;
    name: string;
}
