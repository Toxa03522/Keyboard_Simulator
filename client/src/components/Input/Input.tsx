import { InputProps } from './Input.props';
import cn from 'classnames';
import styles from './Input.module.scss';

const Input = ({ className, type, name, label, ...props }: InputProps): JSX.Element => {
    return (
        <div className={cn(styles.inputWrapper, className, {
            [styles.email]: type == 'email',
            [styles.password]: type == 'password',
        })} {...props}>
            <label className={styles.label}>{label}</label>
            <input className={styles.input} type={type} name={name}/>
        </div>

    );
};

export default Input;