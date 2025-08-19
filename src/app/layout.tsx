import './globals.css';
import { ReactNode } from 'react';
import { dir } from 'i18next';

export const metadata = {
  title: 'Nederlandse Geschiedenis / Dutch History',
  description: 'Bilingual educational Dutch history resource (NL/EN)'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <body className="min-h-screen flex flex-col font-body">
        <a href="#main" className="sr-only focus:not-sr-only focus-outline">Overslaan naar inhoud</a>
        <header className="p-4 shadow-sm bg-white dark:bg-neutral-900">Header / Nav placeholder</header>
        <main id="main" className="flex-1 container mx-auto p-4 max-w-5xl">{children}</main>
        <footer className="p-6 text-sm text-center text-neutral-500">&copy; {new Date().getFullYear()} Dutch History (Bilingual)</footer>
      </body>
    </html>
  );
}
