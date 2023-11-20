import { CardProps } from './Card.props';
import cn from 'classnames';
import styles from './Card.module.scss';

const Card = ({ className, size="responsive", variant="standart", ...props }: CardProps): JSX.Element => {
    return (
        <div className={cn(styles.card, className, {
            [styles.block]: size == 'block',
            [styles.responsive]: size == 'responsive',
            [styles.miniblock]: size == 'miniblock',

            [styles.standart]: variant == 'standart',
            [styles.modal]: variant == 'modal',
        })} {...props}>

        </div>
    );
};

export default Card;