import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
import { ReactNode } from 'react';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio of Vishnu - Senior Frontend Engineer',
  description: `Senior Frontend Engineer with 9+ years building production-scale
  web apps across healthcare, procurement, and industrial AI. Specialises in
  React, Svelte, and TypeScript.`,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM;
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
      </body>
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
    </html>
  )
};
