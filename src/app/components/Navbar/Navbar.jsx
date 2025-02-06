import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <>
      <div className={styles.logo}>
        <h2>GIS Brief Generator</h2>
      </div>      
      <div className={styles.menu}>
        <div className={`${styles.social} custom-link`}>
          <Link href={'https://www.jjserrano.me'} rel="noopener noreferrer">
            <h2>by J.J. Serrano</h2>
          </Link>
        </div>
      </div>

    </>
  )
}
