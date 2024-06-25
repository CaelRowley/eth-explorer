import type { Metadata } from "next";
import "./globals.css";
import { inter } from '@/app/ui/fonts';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

export const metadata: Metadata = {
  title: "Eth Explorer",
  description: "An etherscan clone...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
