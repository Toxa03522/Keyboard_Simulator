import { TitleProps } from "./Title.props";
import cn from 'classnames';
import styles from './Title.module.scss';

const Title = ({ children, type, position, ...props }: TitleProps): JSX.Element => {
    switch (type) {
        case 'h1':
            return <h1 className={cn(styles.h1, {[styles.center]: position == 'center'})}>{children}</h1>;
        case 'h2':
            return <h2 className={cn(styles.h2, {[styles.center]: position == 'center'})}>{children}</h2>;
        case 'h3':
            return <h3 className={cn(styles.h3, {[styles.center]: position == 'center'})}>{children}</h3>;
        case 'h4':
            return <h4 className={cn(styles.h4, {[styles.center]: position == 'center'})}>{children}</h4>;
        case 'h5':
            return <h5 className={cn(styles.h5, {[styles.center]: position == 'center'})}>{children}</h5>;
        case 'h6':
            return <h6 className={cn(styles.h6, {[styles.center]: position == 'center'})}>{children}</h6>;
        default:
            return <></>;
    }
}

export default Title;
