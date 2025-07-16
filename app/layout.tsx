import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Header from '@/widgets/header/Header';
import Footer from '@/widgets/footer/Footer';

const ferryFont = localFont({
  src: '../public/assets/fonts/ferry.otf',
  variable: '--font-ferry',
});
const interFont = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Скан-домашняя страница',
  description: 'Страницы по поиску и сканированию документов',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interFont.variable} ${ferryFont.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="container mx-auto xl:max-w-[1320px]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
