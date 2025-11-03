import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vista Cleaning | Professionele Schoonmaakdiensten Heusden-Zolder',
  description: 'Vista Cleaning biedt hoogwaardige schoonmaakdiensten voor particulieren en bedrijven in Heusden-Zolder. 10+ jaar ervaring, 100% kwaliteitsgarantie.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
