import Head from 'next/head';
import { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children, home }: { children: ReactNode, home?: boolean }) {
  return (
    <div className="mx-auto pt-4 px-4 max-w-5xl text-main min-h-screen flex flex-col">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="JS lover"
          content="Blog"
        />
      </Head>
      <Header />
      <main className="flex-1 mb-20">{children}</main>
      <Footer />
    </div>
  );
}