import { DetailedHTMLProps, FormHTMLAttributes } from "react";

export interface FormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    formType: 'authorization' | 'registration';
}
