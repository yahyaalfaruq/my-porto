import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yahya Al Faruq | Full-Stack Software Engineer',
  description:
    'Portfolio of Yahya Al Faruq — Full-Stack Software Engineer educated at PPQ IT Al Mahir (PPQITA), specializing in Laravel, React, TypeScript, Node.js, and Supabase.',
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' fill='none'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='36' y2='36' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0%25' stop-color='%23a855f7'/%3E%3Cstop offset='100%25' stop-color='%2306b6d4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='2' y='2' width='32' height='32' rx='10' fill='%23050b18' stroke='url(%23g)' stroke-width='2.2'/%3E%3Cpath d='M11.5 11.5L18 19.2L24.5 11.5M18 19.2V25.5' stroke='url(%23g)' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='25.5' cy='24.5' r='2' fill='%2306b6d4'/%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500&family=Tajawal:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
