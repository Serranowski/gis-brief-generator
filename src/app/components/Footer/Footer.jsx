import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <>
      <div className={styles.leftColumn}>
        <div className={`${styles.social} custom-link`}>
          Designed by{' '}
          <Link
            href={'https://www.jjserrano.me/'}
            target="_blank"
            rel="noopener noreferrer"
          >
            J.J. Serrano
          </Link>{' '}
           in 2025. Based on an original idea of{' '}
          <Link
            href={'https://www.jennynguyenoberg.com/'}
            target="_blank"
            rel="noopener noreferrer"
          >
            Jenny Nguyen Öberg.
          </Link>{' '}   
        </div>
      </div>

    </>
  )
}
