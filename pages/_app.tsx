import { AppProps } from 'next/app';
import '../styles/global.css';
import 'prismjs/themes/prism-okaidia.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
