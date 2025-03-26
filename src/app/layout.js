import { League_Spartan } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next';
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body className={leagueSpartan.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export const metadata = {
  title: 'GIS Brief Generator',
}

