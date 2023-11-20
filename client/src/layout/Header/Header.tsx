import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/service/store';
import { logout } from '@/service/userSlice'; // Изменено здесь
import { HeaderProps } from "./Header.props";

import cn from 'classnames';
import styles from './Header.module.scss';
import Link from "@/components/Link/Link";
import Button from "@/components/Button/Button";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    const dispatch = useDispatch();
    const username = useSelector((state: RootState) => state.user.username);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <header className={cn(className, styles.header)}{...props}>
            <nav className={styles.nav}>
                <Link href={'/'} size="big" weight="bold" align="left" underline="auto">Главная</Link>
                <Link href={'/lesson/'} size="big" weight="bold" align="left" underline="auto">Тренажёр</Link>
                <Link href={'/theory/'} size="big" weight="bold" align="left" underline="auto">Теория</Link>
            </nav>
            {username ? (
                <>
                    <span>{username}</span>
                    <Button onClick={handleLogout}>Выйти</Button>
                </>
            ) : (
                <Link href={'/auth/'} size="big" button='button'>Вход или регистрация</Link>
            )}
        </header>
    );
}
