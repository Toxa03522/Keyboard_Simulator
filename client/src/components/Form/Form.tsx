import { FormProps } from './Form.props';
import cn from 'classnames';
import styles from './Form.module.scss';

import Title from "@/components/Title/Title";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { useForm } from '@/service/useForm';

const Form = ({ className, formType, ...props }: FormProps): JSX.Element => {
    const { password, setPassword, confirmPassword, setConfirmPassword, error, handleSubmit } = useForm(formType);

    return (
        <form onSubmit={handleSubmit} className={cn(styles.form, className, {
            [styles.authorization]: formType == 'authorization',
            [styles.registration]: formType == 'registration',
        })} {...props}>
            <Title position="center" type="h1">
                {formType === 'registration' ? 'Регистрация' : 'Авторизация'}
            </Title>
            <Input name="email" type="email" label="Ваша почта" />
            <Input name="password" type="password" label="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
                {formType === 'registration' && <Input name="password" type="password" label="Подтвердите пароль" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />}
            {error && <p>{error}</p>}
            <Button size='big' variant='classic' position='center' type='submit'>
                {formType === 'registration' ? 'Зарегистрироваться' : 'Войти'}
            </Button>
        </form>
    );
};

export default Form;
