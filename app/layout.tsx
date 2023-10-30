import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { GeistSans } from "geist/font";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
