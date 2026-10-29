import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yahya Al Faruq | Full-Stack Software Engineer',
  description:
    'Portfolio of Yahya Al Faruq — Full-Stack Software Engineer educated at PPQ IT Al Mahir (PPQITA), specializing in Laravel, React, TypeScript, Node.js, and Supabase.',
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' fill='none'%3E%3Crect x='2' y='2' width='32' height='32' rx='10' fill='%2309090b' stroke='%23fafafa' stroke-width='2.2'/%3E%3Cpath d='M11.5 11.5L18 19.2L24.5 11.5M18 19.2V25.5' stroke='%23fafafa' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='25.5' cy='24.5' r='2' fill='%23fafafa'/%3E%3C/svg%3E",
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

