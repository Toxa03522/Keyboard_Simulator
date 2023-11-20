import { SidebarProps } from "./Sidebar.props";

import cn from 'classnames';
import styles from './Sidebar.module.scss';

import Link from '@/components/Link/Link';

import lessons from "@/db/lessons.json";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <main className={cn(className, styles.sidebar)} {...props}>
            {lessons.map((lesson) => (
                <Link key={lesson.id} href={`/lesson/${lesson.id}`}>
                    Урок {lesson.id} - {lesson.title}
                </Link>
            ))}
        </main>
    );
}
