import { DetailedHTMLProps, HTMLAttributes } from "react";
import Image from "next/image";


import cn from 'classnames';
import styles from './Trainer.module.scss';

import Link from '@/components/Link/Link';

import lessons from "@/db/lessons.json";
import Card from "@/components/Card/Card";
import Title from "@/components/Title/Title";

interface TrainerProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const Trainer = ({ className, ...props }: TrainerProps): JSX.Element => {
    return (
        <main className={cn(className, styles.trainer)} {...props}>
            {lessons.map((lesson, index) => (
                <Card key={lesson.id} size="block">
                    <div className={styles.item}>
                        {lesson.image && <Image src={lesson.image} alt='Урок' width={200} height={200} priority={index < 8} />}
                        <div className={styles.divider}></div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.wrapper}>
                            <Title type="h4">Урок {lesson.id}</Title>
                            <Title type="h5">{lesson.title}</Title>
                        </div>
                        <Link href={`/lesson/${lesson.id}`} underline="none" button="button">Начать</Link>
                    </div>
                </Card>
            ))}
        </main>
    );
}

export default Trainer;