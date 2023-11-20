import { CounterProps } from './Counter.props';

import styles from './Counter.module.scss';

const Counter = ({ typingSpeed, errorsCount }: CounterProps) => (
    <div className={styles.counters}>
        <p className={styles.counter}>Знаков в минуту - <span>{Math.round(typingSpeed)}</span></p>
        <p className={styles.counter}>Допущено ошибок - <span>{errorsCount}</span></p>
    </div>
);

export default Counter;
