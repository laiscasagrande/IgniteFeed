import styles from './Post.module.css'

export function Post(){
  return(
    <article className={styles.post}>
      <header className={styles.teste03}>
        <div className={styles.teste02}>
          <p>AAAAA</p>
          <div className={styles.teste01}>
            <strong>Jane</strong>
            <span>aaaaaa</span>
          </div>
        </div>
        <p>bleeeee</p>
      </header>
    </article>
  )
}