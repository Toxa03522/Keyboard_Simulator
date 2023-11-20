import { FunctionComponent } from "react";
import { LayoutProps } from "./Layout.props";

import cn from 'classnames';
import styles from './Layout.module.scss';

import Promo from '@/components/Promo/Promo';


export const Layout = ({className}: LayoutProps): JSX.Element => {
    return (
        <main className={cn(styles.layout, className)}>
            <Promo />
        </main>
    );
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}
