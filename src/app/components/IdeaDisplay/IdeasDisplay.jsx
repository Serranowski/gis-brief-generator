import styles from './ideaDisplay.module.css'

export default function IdeasDisplay({
  showIdeas,
  selectedIndustry,
  tempSelectedCategory,
  selectedCategoryDeadline,
  currentIdea,
}) {
  if (showIdeas) {
    return (
      <div className={styles.main}>
        <div className={styles.label}>
          <label>Ideas for a {tempSelectedCategory} {selectedIndustry} map</label>
        </div>
        
        <div className={styles.ideaContainer}>
          <div><span>You should</span></div>
          <div><span>...</span></div>
          <span className={styles.idea}>{currentIdea}</span>
        </div>
        <span className={styles.deadline}>
          Deadline in
          <p className={styles.underline}>{selectedCategoryDeadline}</p>days.
        </span>
      </div>
    )
  } else {
    return null
  }
}
