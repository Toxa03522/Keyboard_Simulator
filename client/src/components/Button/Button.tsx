import { ButtonProps } from './Button.props';

import cn from 'classnames';
import styles from './Button.module.scss';

const Button = ({ className, size = "middle", variant = "classic", position, children, ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.little]: size == 'little',
				[styles.middle]: size == 'middle',
				[styles.big]: size == 'big',

				[styles.classic]: variant == 'classic',
				[styles.outline]: variant == 'outline',
				[styles.ghost]: variant == 'ghost',
				[styles.video]: variant == 'video',

				[styles.standart]: position == 'standart',
				[styles.center]: position == 'center',
			})}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;