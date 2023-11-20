import { LinkProps } from './Link.props';

import cn from 'classnames';
import styles from './Link.module.scss';

const Link = ({ 
	className, 
	size='middle', 
	weight='regular', 
	align='center',
	underline='auto',
	href, children, button, ...props 
}: LinkProps): JSX.Element => {
	return (
		<a
			className={cn(styles.link, className, {
				[styles.little]: size == 'little',
				[styles.middle]: size == 'middle',
				[styles.big]: size == 'big',

				[styles.light]: weight == 'light',
				[styles.regular]: weight == 'regular',
				[styles.bold]: weight == 'bold',

				[styles.normal]: align == 'center',
				[styles.start]: align == 'left',
				[styles.end]: align == 'right',

				[styles.auto]: underline == 'auto',
				[styles.hover]: underline == 'hover',
				[styles.none]: underline == 'none',

				[styles.button]: button == 'button',
			})}
			href={href}
			{...props}
		>
			{children}
		</a>
	);
};

export default Link;