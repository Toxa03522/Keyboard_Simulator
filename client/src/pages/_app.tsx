import '../styles/styles.scss'
import type { AppProps } from 'next/app'
import { Header } from '../layout/Header/Header';
import { ExerciseProvider } from '../service/ExerciseContext';
import { Provider } from 'react-redux';
import { store } from '@/service/store';
import { login } from '@/service/userSlice'; // Изменено здесь
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.email) {
      store.dispatch(login(user.email));
    }
  }, []);

  console.log('Разработка - https://github.com/Toxa03522');
  return (
    <Provider store={store}>
      <ExerciseProvider>
        <Header />
        <Component {...pageProps} />
      </ExerciseProvider>
    </Provider>
  );
}
