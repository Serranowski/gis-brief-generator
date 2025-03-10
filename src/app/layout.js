import { League_Spartan } from 'next/font/google'
import './globals.css'

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export const metadata = {
  title: 'GIS Brief Generator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <body className={leagueSpartan.className}>{children}</body>
</html>
  )
}
