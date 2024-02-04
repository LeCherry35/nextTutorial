
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  
}) {
;
  
  return (
    <html lang="en">
      <body  className={`${inter.className} antialiased`}>
        <h1>Pisya koroleva!</h1>
        {children}
        </body>
    </html>
  );
}
