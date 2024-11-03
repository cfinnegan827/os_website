/* eslint-disable react/react-in-jsx-scope */
import './globals.scss';
import type { AppProps /*, AppContext */} from 'next/app';

export default function MyApp({ Component, pageProps}: AppProps) {
  return <Component {...pageProps}/>;
}