import { useState } from 'react';
import { DetailedHTMLProps, HTMLAttributes } from "react";

import cn from 'classnames';
import styles from './Auth.module.scss';

import Form from "@/components/Form/Form";
import Button from "@/components/Button/Button";

interface AuthProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const Auth = ({ className, ...props }: AuthProps): JSX.Element => {
    const [formType, setFormType] = useState<'authorization' | 'registration'>('authorization');

    const handleClick = () => {
        setFormType(prevType => prevType === 'authorization' ? 'registration' : 'authorization');
    };

    return (
        <main className={cn(className, styles.auth)} {...props}>
            <Form formType={formType}/>
            <Button size="little" variant="ghost" onClick={handleClick}>
                {formType === 'registration' ? 'Уже зарегистрированы?' : 'Не зерегистрированы?'}
            </Button>
        </main>
    );
}

export default Auth;
