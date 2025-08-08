import type { Metadata } from 'next';
import '../globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import localFont from 'next/font/local';

const raleway = localFont({
  src: '../fonts/Raleway.woff2',
  variable: '--font-raleway',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'WearHaus Ecommerce app for shoppers',
  description: 'An Ecommerce app for education purpose',
};

import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'react-hot-toast';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`${raleway.variable} antialiased`}>
          <Header />
          {children}
          <Footer />
          <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#000000",
            color: "#fff",
          },
        }}
      />
        </body>
      </ClerkProvider>
    </html>
  );
}
