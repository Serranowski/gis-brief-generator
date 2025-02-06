import styles from './button.module.css'

export default function Button({ onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      Generate
    </button>
  )
}
