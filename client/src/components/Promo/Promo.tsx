import YouTube from 'react-youtube';
import { useState } from 'react';

import { PromoProps } from "./Promo.props";

import Image from "next/image";
import cn from 'classnames';
import styles from './Promo.module.scss';

import Link from '../Link/Link';
import Title from '../Title/Title';
import Button from '../Button/Button';

const Promo = ({ className }: PromoProps): JSX.Element => {
    const [playVideo, setPlayVideo] = useState(false);

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: playVideo ? 1 : 0,
        },
    };

    const onPlayVideo = () => {
        setPlayVideo(true);
    };

    return (
        <section className={cn(styles.promo, className)}>
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <Image className={styles.image} src="/Images/promo/promo.jpg" alt="Клавиатурный тренажёр онлайн" width={600} height={600} priority />
                </div>
                <div className={styles.item}>
                    <Title type="h1">Клавиатурный тренажёр онлайн</Title>
                    <Title type="h2">Научитесь печатать вслепую. Уроки слепой печати на бесплатном клавиатурном тренажере</Title>
                    <div className={styles.wrapperButtons}>
                        <Link size="big" href={'/lesson/'}>Попробуй без регистрации</Link>
                        <Link href={'/auth/'} size="big" button='button'>Вход или регистрация</Link>
                    </div>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.descr}>
                    <Title type="h2">Особенности обучения</Title>
                    <p>Клавиатурный тренажер содержит всё необходимое для того чтобы вы могли быстро и легко освоить навык слепой печати. Нужно только ваше желание и немного терпения. А главное - всё бесплатно</p>
                </div>
                <div className={styles.item}>
                    {playVideo ? (
                        <YouTube videoId="aqxSkvDVMao" opts={opts} />
                    ) : (
                        <div className={styles.video} onClick={onPlayVideo}>
                            <Button variant='video'>
                                <svg width="68" height="48" viewBox="0 0 68 48">
                                    <path className="buttonShape" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"></path>
                                    <path className="buttonIcon" d="M 45,24 27,14 27,34"></path>
                                </svg>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Promo;
